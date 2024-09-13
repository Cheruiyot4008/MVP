// Fetch cryptocurrency data from CoinGecko and display it in the table

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets';
const currency = 'usd';
const tableBody = document.querySelector('#crypto-table tbody');
const searchInput = document.getElementById('crypto-search');
const searchButton = document.getElementById('search-btn');

// Fetch data and update the table
async function fetchCryptoData() {
    try {
        const response = await fetch(`${API_URL}?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=1`);
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Display the data in the table
function displayData(data) {
    tableBody.innerHTML = ''; // Clear the table before inserting new rows
    data.forEach(coin => {
        const row = `
            <tr>
                <td><img src="${coin.image}" alt="${coin.name}" width="30"></td>
                <td>${coin.name}</td>
                <td>$${coin.current_price.toFixed(2)}</td>
                <td style="color: ${coin.price_change_percentage_24h < 0 ? 'red' : 'green'};">
                    ${coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td>$${coin.market_cap.toLocaleString()}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Search functionality
searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const rows = document.querySelectorAll('#crypto-table tbody tr');
    rows.forEach(row => {
        const coinName = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        if (coinName.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

// Initial fetch of data
fetchCryptoData();
