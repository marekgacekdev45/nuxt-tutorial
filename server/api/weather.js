


export default defineEventHandler(async (event) => {
    const weather = await $fetch(`https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`)

	return weather
  })