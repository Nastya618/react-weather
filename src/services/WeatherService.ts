import { AxiosResponse } from 'axios'
import api from '../axios'
import { Weather } from '../store/types/Types'

export class WeatherService {
	static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
		return api.get<Weather>(`/weather?q=${city}`)
	}
}
