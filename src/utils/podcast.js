/** Format data podcast **/
export function formatPodcast(podcast) {
    return {
        id: podcast['id'] && podcast['id']['attributes'] ? podcast['id']['attributes']['im:id'] : null,
        name: podcast['im:name'] ? podcast['im:name']['label'] : null,
        author: podcast['im:artist'] ? podcast['im:artist']['label'] : null,
        image: {
            small: podcast['im:image'] && podcast['im:image'][0] ? podcast['im:image'][0]['label'] : null,
            medium: podcast['im:image'] && podcast['im:image'][1] ? podcast['im:image'][1]['label'] : null,
            large: podcast['im:image'] && podcast['im:image'][2] ? podcast['im:image'][2]['label'] : null,
        },
    };
}
