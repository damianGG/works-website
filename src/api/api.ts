export async function getStrapiData() {
    const response = await fetch(`http://localhost:1337/api/aktualnoscis`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer a53e3c296f387fcd393e99029b9c6a9231e4367efdee3eeec599fe656143e869c14b2094fd876a0885cd46398f87a35a43c1eca3ad0d04dc12b8f756b6c2f843b560cf204b0277e61d5c95e0abf13c40c80c377ddd8eff4c42b060f0f7c2ade5bede7a99327937f915f5646c36c7eb6fd37d0f6627f1252aba98a20f22817424`
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data;
}