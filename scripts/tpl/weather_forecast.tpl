<div class="item">
	{@each data.list as item}
	<ul class="day-item">
            <li>${item.dt|getDates}</li>
            <li><img src="weather_icons/s/${item.weather[0].icon}.png"></li>
            <li>${item.weather[0].description}</li>
            <li class="max">${(item.temp.max).toFixed(1)}&deg;</li>
            <li class="min">${(item.temp.min).toFixed(1)}&deg;</li>
    </ul>
    {@/each}
</div>