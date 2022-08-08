export const LOAD_CARDS = 'LOAD_CARDS';

export function loadCards(){
    return async function (dispatch){
        const all = [];
        try {
            await fetch( `https://api.thedogapi.com/v1/breeds` )
                .then( js => js.json() )
                .then( arrayJson => { 
                    console.log(arrayJson);
                    arrayJson.forEach( a => {
                        all.push({
                            id: a.id,
                            name: a.name,
                            height: a.height.metric,
                            weight: a.weight.metric,
                            bred_for: a.bred_for,
                            breed_group: a.breed_group,
                            life_span: a.life_span,
                            temperament: a.temperament,
                            origin: a.origin,
                            image: a.image.url
                        });
                    } );
                    dispatch( { type: LOAD_CARDS, payload: all } ) 
                })
                .catch( err => console.error(err) );
        } catch (e) {
            console.error(e);
        }
    };
};