(function () {
    var pieColors = ['#ff8e3c', '#ffe84a', '#FFAF29'];

    function getTotal(arr) {
        var j,
            myTotal = 0;

        for (j = 0; j < arr.length; j++) {
            myTotal += (typeof arr[j] === 'number') ? arr[j] : 0;
        }

        return myTotal;
    }

    function drawPieChart(canvasId) {
        var i,
            canvas = document.getElementById(canvasId),
            pieData = canvas.dataset.value.split(',').map(function (x) { return parseInt(x, 10) }),
            halfWidth = canvas.width * .5,
            halfHeight = canvas.height * .5,
            ctx = canvas.getContext('2d'),
            lastend = 0,
            myTotal = getTotal(pieData);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (i = 0; i < pieData.length; i++) {
            ctx.fillStyle = pieColors[i];
            ctx.beginPath();
            ctx.moveTo(halfWidth, halfHeight);
            ctx.arc(halfWidth, halfHeight, halfHeight, lastend, lastend + (Math.PI * 2 * (pieData[i] / myTotal)), false);
            ctx.lineTo(halfWidth, halfHeight);
            ctx.fill();
            lastend += Math.PI * 2 * (pieData[i] / myTotal);
        }
    }

    drawPieChart('canPie');
})();

$(function () {
    var lastY;
    var scrolled = false;
    $(document).on('touchmove', function (e) {
        var currentY = e.originalEvent.touches[0].clientY;
        if (currentY > lastY && !scrolled) {
            parent.pageUp();
            scrolled = true;
            setTimeout(function () {
                scrolled = false;
            }, 1000);
        }
        lastY = currentY;
    });
});