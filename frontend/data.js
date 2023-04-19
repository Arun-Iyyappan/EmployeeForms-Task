    const show = async() => {
            const res =await fetch('http://localhost:3000');
            const data = await res.json();
            const table =document.querySelector('tbody');
            result = "";
            data.forEach(e => {
                let cp = 2023 - e.date;
                result += `
                <tr>
                <td>${e.ename}</td>
                <td>${e.mail}</td>
                <td>${e.mobile}</td>
                <td>${e.gender}</td>
                <td>${e.qual}</td>
                <td>${e.years}</td>
                <td>${cp}</td>
                </tr> `
            });
            table.innerHTML = result;
        }
    show();