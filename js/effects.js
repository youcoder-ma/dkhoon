    let max_particles = 1000;

    var tela = document.createElement("canvas");
    tela.width = $(window).width();
    tela.height = $(window).height();
    tela.className = 'canvas__';
    $("section").append(tela);

    var canvas = tela.getContext("2d");

    class Particle {
      constructor(canvas, progress) {
        let random = Math.random();
        this.progress = 0;
        this.canvas = canvas;

        this.x =
          $(window).width() / 2 + (Math.random() * 200 - Math.random() * 200);
        this.y =
          $(window).height() / 2 +
          (Math.random() * 200 - Math.random() * 200);
        this.s = Math.random() * 1;
        this.a = 0;
        this.w = $(window).width();
        this.h = $(window).height();
        this.radius = random > 0.2 ? Math.random() * 1 : Math.random() * 3;
        this.color = random > 0.2 ? "#cbbd93" : "#b5ff00";
        this.radius = random > 0.8 ? Math.random() * 2 : this.radius;
        this.color = random > 0.8 ? "#2E4765" : this.color;

        // this.color  = random > .1 ? "#ffae00" : "#f0ff00" // Alien
        this.variantx1 = Math.random() * 200;
        this.variantx2 = Math.random() * 200;
        this.varianty1 = Math.random() * 150;
        this.varianty2 = Math.random() * 150;
      }

      render() {
        this.canvas.beginPath();
        this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.canvas.lineWidth = 2;
        this.canvas.fillStyle = this.color;
        this.canvas.fill();
        this.canvas.closePath();
      }

      move() {
        this.x += Math.cos(this.a) * this.s;
        this.y += Math.sin(this.a) * this.s;
        this.a += Math.random() * 0.8 - 0.4;

        if (this.x < 0 || this.x > this.w - this.radius) {
          return false;
        }

        if (this.y < 0 || this.y > this.h - this.radius) {
          return false;
        }
        this.render();
        this.progress++;
        return true;
      }
    }

    let particles = [];
    let init_num = popolate(max_particles);
    function popolate(num) {
      for (var i = 0; i < num; i++) {
        setTimeout(
          function () {
            particles.push(new Particle(canvas, i));
          }.bind(this),
          i * 20
        );
      }
      return particles.length;
    }

    function clear() {
      canvas.globalAlpha = 0.05;
      canvas.fillStyle = "#fae8b4";
      canvas.fillStyle = "#2e2727"; // Alien
      canvas.fillRect(0, 0, tela.width, tela.height);
      canvas.globalAlpha = 1;
    }

    function update() {
      particles = particles.filter(function (p) {
        return p.move();
      });
      if (particles.length < init_num) {
        popolate(1);
      }
      clear();
      requestAnimationFrame(update.bind(this));
    }
    update();

    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
    document.addEventListener("keydown", function (e) {
      if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
      }else if (e.key === "F12") {
        e.preventDefault();
      }
    });