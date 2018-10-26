import * as auxiliar from './auxiliar';

/*
 * Serializers for podcast data
 */
export const formatPodcast = {
    serializeListData: (jsonData) => {
        return {
            id: jsonData['id'] && jsonData['id']['attributes']
                ? jsonData['id']['attributes']['im:id'] : null,
            name: jsonData['im:name'] ? jsonData['im:name']['label'] : null,
            author: jsonData['im:artist'] ? jsonData['im:artist']['label'] : null,
            image: jsonData['im:image'] && jsonData['im:image'][2]
                ? jsonData['im:image'][2]['label'] : null,
        };
    },

    serializeDetail: (jsonData) => {
        return {
            id: jsonData['collectionId'] || null,
            name: jsonData['collectionName'] || null,
            author: jsonData['artistName'] || null,
            description: jsonData['itunes:summary'] ? jsonData['itunes:summary'][0] : null,
            image: jsonData['artworkUrl600'] || null,
            episodes: formatepisodes(
                jsonData['item'],
                jsonData['collectionId']
            ).reverse(),
        };
    },
};


/*
 * Serializer episodes
 */
export function formatepisodes(episodes, podcastId) {
    const serializeEpisodes = [];

    episodes.forEach((episode, index) => {
        const formatepisode = {
            id: `${index}_${podcastId}`,
            podcastId,
            title: episode['title'] ? episode['title'][0] : '-',
            description: episode['description'] ? episode['description'][0] : null,
            pubDate: episode['pubDate'] ? auxiliar.formatDate(episode['pubDate'][0]) : '-',
            duration: episode['itunes:duration'] ? auxiliar.formatTime(episode['itunes:duration'][0]) : '-',
            mp3: episode['enclosure'] && episode['enclosure'][0] && episode['enclosure'][0]['$']
                ? episode['enclosure'][0]['$']['url'] : null,
        };

        serializeEpisodes.push(formatepisode);
    });

    return serializeEpisodes;
}
