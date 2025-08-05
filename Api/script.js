fetch("https://randomuser.me/api/?results=10")
  .then(res => res.json())
  .then(data => {
    const users = data.results;
    const container = document.getElementById("user-container");

    const names = [];
    const ages = [];

    users.forEach(user => {
      const card = document.createElement("div");
      card.className = "user-card";
      card.innerHTML = `
        <img src="${user.picture.medium}" alt="avatar"><br/>
        <strong>${user.name.first} ${user.name.last}</strong><br/>
        อายุ: ${user.dob.age}<br/>
        ประเทศ: ${user.location.country}
      `;
      container.appendChild(card);

      names.push(`${user.name.first}`);
      ages.push(user.dob.age);
    });

    // สร้าง Chart
    const ctx = document.getElementById('ageChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: names,
        datasets: [{
          label: 'อายุผู้ใช้',
          data: ages,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: { y: { beginAtZero: true } }
      }
    });
  });
