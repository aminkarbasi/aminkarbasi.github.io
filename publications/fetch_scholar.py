from scholarly import scholarly

# Function to retrieve publications of Amin Karbasi
def fetch_publications(author_name="Amin Karbasi"):
    search_query = scholarly.search_author(author_name)
    author = next(search_query)  # Get the first author match
    scholarly.fill(author, sections=["publications"])  # Retrieve publications
    return author["publications"]

# Function to parse citation for journal or conference name
def parse_citation_for_venue(citation):
    if citation:
        parts = citation.split(",")  # Split citation by commas
        if len(parts) > 1:  # Check if there's a potential venue part
            return parts[0].strip()  # Assume first part is the venue or journal name
    return "Venue/Journal not available"

# Function to create HTML for publications
def create_html(publications):
    # Sort publications by year (descending order), default to 0 for missing years
    publications = sorted(publications, key=lambda x: int(x.get('bib', {}).get('pub_year', 0)), reverse=True)

    html = '<table>\n'

    for pub in publications:
        # Extract publication details with fallbacks
        bib = pub.get('bib', {})
        title = bib.get('title', 'Title not available')
        year = bib.get('pub_year', 'Year not available')
        citation = bib.get('citation', '')
        venue = parse_citation_for_venue(citation)  # Extract venue or journal name

        # Debugging output for missing fields
        if year == 'Year not available' or venue == 'Venue/Journal not available':
            print(f"Missing or incomplete data for publication: {title}")

        # Main row
        html += f'''
        <tr>
          <td>{title}</td>
          <td>Authors not available</td>
          <td class="small">{year}</td>
          <td>{venue}</td>
          <td class="center read">
              <button onclick="toggleReview(this)">read ▿</button>
          </td>
        </tr>
        '''

        # Details row
        html += f'''
        <tr class="full">
          <td colspan="5">
              <div>
                Citation: {citation if citation else "Description not available"}.
                <!-- Add links or additional information here -->
              </div>
              <br/>
              <button onclick="hideReview(this)">close ⌃</button>
              <button onclick="copyReview(this)">copy to clipboard</button>
          </td>
        </tr>
        '''

    html += '</table>'
    return html

# Main script
if __name__ == "__main__":
    print("Fetching publications...")
    try:
        publications = fetch_publications(author_name="Amin Karbasi")
        print("Creating HTML...")
        html_output = create_html(publications)
        with open("amin_karbasi_publications.html", "w", encoding="utf-8") as f:
            f.write(html_output)
        print("HTML saved to 'amin_karbasi_publications.html'")
    except Exception as e:
        print(f"An error occurred: {e}")

