const p5Polyfill = {
    PI: Math.PI,
    HALF_PI: Math.PI / 2,
    random: (a, b) => {
        if (a !== undefined && b !== undefined) {
            return Math.floor(Math.random() * (b - a)) + a;
        } else {
            const i = Math.floor(Math.random() * a.length);
            return a[i];
        }
    },
    fill: (c) => context.fillStyle = c,
    stroke: (c) => context.strokeStyle = c,
    noFill: () => context.fillStyle = 'transparent',
    noStroke: () => context.strokeStyle = 'transparent',
    push: () => context.save(),
    pop: () => context.restore(),
    translate: (x, y) => context.translate(x, y),
    scale: (x, y) => context.scale(x, y),
    rect: (x, y, w, h) => {
        context.fillRect(x, y, w, h);
        context.strokeRect(x, y, w, h);
    },
    circle: (x, y, diameter) => {
        context.beginPath();
        context.arc(x + diameter / 2, y + diameter / 2, diameter / 2, 0, Math.PI * 2);
        context.closePath();
        context.fill();
        context.stroke();
    }
};

function neuralNetworkVisualization(p) {
    let layers = [3, 5, 4, 2]; // Number of neurons in each layer
    let layerSpacing, neuronPositions, lockedNeurons = [];
    let currentLayer = 0;
    let currentNeuron = 0;
    const colors = ['#84B4F9', '#1231B5', '#BFE9DC', '#39948E', '#FAC832', '#FECBCA', '#F83735'];

    setup();

    function setup() {
        const rekt = document.getElementById('birbs').getBoundingClientRect();
        const canvas = document.querySelector('#birbs > canvas');
        if (!canvas) return;

        context = canvas.getContext('2d');
        canvas.style.width = rekt.width + 'px';
        canvas.style.height = rekt.height + 'px';
        rekt.width *= window.devicePixelRatio;
        rekt.height *= window.devicePixelRatio;
        context.scale(window.devicePixelRatio, window.devicePixelRatio);
        canvas.width = rekt.width;
        canvas.height = rekt.height;
        p.width = rekt.width;
        p.height = rekt.height;

        layerSpacing = p.width / (layers.length + 1);
        canvas.addEventListener('click', () => {
            resetAnimation();
            animateLayers();
        });

        resetAnimation();
        animateLayers();
    }

    function resetAnimation() {
        currentLayer = 0;
        currentNeuron = 0;
        neuronPositions = calculateNeuronPositions();
        lockedNeurons = randomlyLockNeurons(neuronPositions);
        drawBackground();
    }

    function calculateNeuronPositions() {
        let positions = [];
        layers.forEach((neurons, layerIndex) => {
            let ySpacing = p.height / (neurons + 1);
            let x = (layerIndex + 1) * layerSpacing;

            let layerPositions = [];
            for (let i = 0; i < neurons; i++) {
                let y = (i + 1) * ySpacing;
                layerPositions.push({ x, y, layer: layerIndex, index: i });
            }
            positions.push(layerPositions);
        });
        return positions;
    }

    function randomlyLockNeurons(positions) {
        const totalNeurons = positions.flat();
        const numLocked = Math.floor(totalNeurons.length * 0.2); // Lock 20% of neurons
        const locked = [];

        for (let i = 0; i < numLocked; i++) {
            const randomNeuron = p.random(totalNeurons);
            locked.push(`${randomNeuron.layer}-${randomNeuron.index}`);
        }
        return locked;
    }

    function drawBackground() {
        context.clearRect(0, 0, p.width, p.height);
        context.fillStyle = 'white';
        context.fillRect(0, 0, p.width, p.height);
    }

    function animateLayers() {
        const drawInterval = setInterval(() => {
            if (currentLayer < neuronPositions.length) {
                const layer = neuronPositions[currentLayer];
                if (currentNeuron < layer.length) {
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    drawConnections(currentLayer, layer[currentNeuron]);
                    drawNeuron(layer[currentNeuron], color);
                    currentNeuron++;
                } else {
                    currentNeuron = 0;
                    currentLayer++;
                }
            } else {
                clearInterval(drawInterval);
            }
        }, 300); // Adjust delay for animation speed
    }

    function drawNeuron(neuron, color) {
        const radius = 36; // Adjust circle size here
        const isLocked = lockedNeurons.includes(`${neuron.layer}-${neuron.index}`);

        context.fillStyle = color;
        context.strokeStyle = '#000';
        context.lineWidth = 2;

        // Draw the neuron circle
        context.beginPath();
        context.arc(neuron.x, neuron.y, radius, 0, Math.PI * 2);
        context.closePath();
        context.fill();
        context.stroke();

        if (isLocked) {
            // Draw a lock symbol inside the neuron
            const lockSize = radius * 0.5;
            context.fillStyle = '#000';
            context.beginPath();
            // Draw the lock body
            context.rect(neuron.x - lockSize / 2, neuron.y - lockSize / 4, lockSize, lockSize / 2);
            context.fill();
            // Draw the lock shackle
            context.beginPath();
            context.arc(neuron.x, neuron.y - lockSize / 2, lockSize / 4, Math.PI, 0, false);
            context.stroke();
        }
    }

    function drawConnections(layerIndex, neuron) {
        if (layerIndex === 0) return; // Skip connections for the first layer

        const previousLayer = neuronPositions[layerIndex - 1];
        const radius = 30; // Adjust radius to match neuron size

        previousLayer.forEach(prevNeuron => {
            // Calculate the angle between the centers of the two circles
            const dx = neuron.x - prevNeuron.x;
            const dy = neuron.y - prevNeuron.y;
            const angle = Math.atan2(dy, dx);

            // Calculate the start and end points of the line on the circle edges
            const startX = prevNeuron.x + radius * Math.cos(angle);
            const startY = prevNeuron.y + radius * Math.sin(angle);
            const endX = neuron.x - radius * Math.cos(angle);
            const endY = neuron.y - radius * Math.sin(angle);

            // Randomly determine the thickness of the connection
            const lineWidth = Math.random() < 0.2 ? Math.floor(Math.random() * 4) + 2 : 1; // 20% chance to be thicker

            context.strokeStyle = '#AAAAAA';
            context.lineWidth = lineWidth; // Apply the random thickness
            context.beginPath();
            context.moveTo(startX, startY);
            context.lineTo(endX, endY);
            context.stroke();
        });
    }

}

let context;
window.p = p5Polyfill;
neuralNetworkVisualization(p);
