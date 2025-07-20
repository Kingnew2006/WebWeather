import { cities } from "../data/top-200-cities"

export const FuncGetList = async (letters) => {
    let List = cities.filter(city => {
        const City = city.toLocaleLowerCase()
        const Letters = letters.toLocaleLowerCase()
        return City.startsWith(Letters)
    })
    
    return List;
}