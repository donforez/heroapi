import axios from 'axios';

const ACCESS_TOKEN = 1468893526995573;

export const getBasicHeroInfoById = async id => {
  const { data: powerstats } = await axios.get(`https://www.superheroapi.com/api.php/${ACCESS_TOKEN}/${id}/powerstats`)
  const { data: image } = await axios.get(`https://www.superheroapi.com/api.php/${ACCESS_TOKEN}/${id}/image`)
  return { name: powerstats.name, powerstats, imgUrl: image.url, id: powerstats.id }
}

export const searchHeroesByName = name => {
  return axios.get(`https://www.superheroapi.com/api.php/${ACCESS_TOKEN}/search/${name}`)
}