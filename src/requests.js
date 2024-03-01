import axios from 'axios';

const ACCESS_TOKEN = 1468893526995573;

export const getBasicHeroInfoById = async id => {
  const { data: powerstats } = await axios.get(`https://www.superheroapi.com/api.php/${ACCESS_TOKEN}/${id}/powerstats`)
  const { data: image } = await axios.get(`https://www.superheroapi.com/api.php/${ACCESS_TOKEN}/${id}/image`)
  return { name: powerstats.name, powerstats, imgUrl: image.url, id: powerstats.id }
}

export const getDetailsHeroById = async id => {
  const { data: biography } = await axios.get(`https://www.superheroapi.com/api.php/${ACCESS_TOKEN}/${id}/biography`)
  const { data: appearance } = await axios.get(`https://www.superheroapi.com/api.php/${ACCESS_TOKEN}/${id}/appearance`)
  const { data: work } = await axios.get(`https://www.superheroapi.com/api.php/${ACCESS_TOKEN}/${id}/work`)
  const { data: connections } = await axios.get(`https://www.superheroapi.com/api.php/${ACCESS_TOKEN}/${id}/connections`)
  return { 
    name: biography['full-name'], 
    aliases: biography.aliases,
    birthPlace: biography['place-of-birth'], 
    gender: appearance.gender,
    race: appearance.race,
    height: appearance.height[0],
    weight: appearance.weight[0],
    eyeColor: appearance['eye-color'],
    hairColor: appearance['hair-color'],
    occupation: work.occupation,
    base: work.base,
    groupAffiliation: connections['group-affiliation'],
    relatives: connections.relatives
  }
}

export const searchHeroesByName = name => {
  return axios.get(`https://www.superheroapi.com/api.php/${ACCESS_TOKEN}/search/${name}`)
}