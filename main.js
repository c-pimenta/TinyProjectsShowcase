
        // Add your projects here
        const projects = [
            {
                title: "Color Flipper",
                src:"assets/colorflipper.png",
                desc: "A simple app to change background colors randomly.",
                link: "projects/colorFlipper/index.html"
            },
            {
                title: "30 Word Game",
                src:"assets/30wordstory.png",
                desc: "A fun game to create stories with a 30-word limit.",
                link: "projects/project_30wordsgame/index.html"
            },
            {
                title: "Mad libs",
                src:"assets/madlibs.png",
                desc: "A playful take on the classic Mad Libs game.",
                link: "projects/madLips/index.html"
            },
            {
                title:"Rock Paper Scissors",
                src:"assets/rockpaperscissors.png",
                desc: "Classic Rock Paper Scissors game against the computer.",
                link: "projects/rock-pape-scissors/index.html"

            },
            {
                title:"Movie Judge Game",
                src:"assets/moviegame.png",
                desc: "Helps two people decide on a movie to watch together.",
                link: "projects/project_movie/index.html"
            }
            
        ];

        const container = document.getElementById('projects-list');
        projects.forEach(proj => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <h2 class="project-title">${proj.title}</h2>
                <img src="${proj.src}" alt="${proj.title}" class="project-image"/>
                <p class="project-desc">${proj.desc}</p>
                <a class="project-link" href="${proj.link}" target="_blank">View Project &rarr;</a>
            `;
            container.appendChild(card);
        });
   