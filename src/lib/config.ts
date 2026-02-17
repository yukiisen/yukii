interface ReplayInfo {
    player: string,
    description: string,
    mapName: string,
    filepath: string,
    replay: string,
    beatmap: string,
}

interface ProjectInfo {
    name: string,
    repo: string,
    description: string
}

export const clips_d_lblawi: ReplayInfo[] = [
    { 
        player: "yukiisen", 
        description: "Nice Stuff",
        mapName: "REANIMATE by Warak", 
        filepath: "https://cdn-video-1.issou.best/ordr/Pz7egmWVdO8kb9t479h2Yixe.mp4", 
        replay: "6176520794", 
        beatmap: "186318" 
    },
    { 
        player: "yukiisen", 
        description: "Bim bim",
        mapName: "Mitsukiyo - Unwelcome School", 
        filepath: "https://cdn-video-1.issou.best/ordr/QE7F0nb744keGe6NyFonjyXj.mp4", 
        replay: "6178251550", 
        beatmap: "2120192" 
    },
    { 
        player: "yukiisen", 
        description: "Should hentai be considered content?",
        mapName: "Override by Shirakami Fubuki with Kurokami Fubuki", 
        filepath: "https://cdn-video-1.issou.best/ordr/5ZU6quME65rjMJOYXfSz7ee9.mp4", 
        replay: "6220157349", 
        beatmap: "2278555" 
    },
    { 
        player: "yukiisen", 
        description: "DT stuff and all",
        mapName: "Mata Ashita by Yuuki Aoi", 
        filepath: "https://cdn-video-1.issou.best/ordr/WzD0975f8WS9uk32ZBhGQOrR.mp4", 
        replay: "6236375431", 
        beatmap: "172055" 
    },
];

export const projects_d_lblawi: ProjectInfo[] = [
    { name: "Herta", repo: "herta", description: "An AI bot that can chat with your friends instead of you." },
    { name: "Svr", repo: "svr", description: "A minimal static http server cli built from scratch in rust" },
    { name: "Stress", repo: "stress", description: "an http library built from scratch in rust." },
    { name: "Kiri", repo: "kiri", description: "A fast and small fuzzy finder for the terminal." },
]

export const config = {
    name: 'Yuki',
    githubUsername: 'yukiisen',
    twitterUsername: 'notarchivist'
}
