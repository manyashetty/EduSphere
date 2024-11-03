AFRAME.registerComponent('pendulum', {
    init: function () {
      // Get the entity where the pendulum will be attached
      const sceneEl = this.el.sceneEl;
  
      // Create the thread for the pendulum
      const thread = document.createElement('a-box');
      thread.setAttribute('position', '0 0.75 0');
      thread.setAttribute('depth', '0.05');
      thread.setAttribute('height', '1');
      thread.setAttribute('width', '0.05');
      thread.setAttribute('color', 'black');
      this.el.appendChild(thread);
  
      // Create the pendulum bob
      const bob = document.createElement('a-sphere');
      bob.setAttribute('position', '0 -0.75 0');
      bob.setAttribute('radius', '0.1');
      bob.setAttribute('color', 'blue');
      this.el.appendChild(bob);
  
      // Set up pendulum swinging motion
      this.angle = 0; // Initial angle in radians
      this.angularSpeed = 0.02; // Speed of swinging motion
    },
  
    tick: function () {
      // Update the pendulum's position to create a swinging motion
      this.angle += this.angularSpeed;
  
      const bob = this.el.querySelector('a-sphere');
      const thread = this.el.querySelector('a-box');
  
      // Swinging effect
      const x = Math.sin(this.angle) * 0.5;
      const y = -Math.cos(this.angle) * 0.5 - 0.5;
  
      // Set the new positions for the pendulum bob and thread
      bob.setAttribute('position', { x: x, y: y, z: 0 });
      thread.setAttribute('rotation', { x: 0, y: 0, z: Math.sin(this.angle) * 15 });
    }
  });




