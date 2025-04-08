// Font Awesome icon in the Unicode format
const icon_code = '\uf39f';
// Icon fill color
const icon_color = '#108d38'
// Canvas shape
const canvas_shape = 'circle';
// Canvas background color
const canvas_bg_color = '#ffffff';


window.onload = function() {
    const canvas = document.getElementById('iconCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas background color
    ctx.fillStyle = canvas_bg_color;

    // Set canvas shape
    if (canvas_shape === 'rectangle') {
        // Rectangle
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    else if (canvas_shape === 'circle') {
        // Circle
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2);
        ctx.fill();
    }

    // Set icon style (fill color, alignment)
    ctx.fillStyle = icon_color;
    ctx.font = '80px FontAwesome';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Render the icon
    const icon = icon_code;
    ctx.fillText(icon, canvas.width / 2, canvas.height / 2);
};
