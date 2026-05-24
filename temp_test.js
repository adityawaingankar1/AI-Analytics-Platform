
        const { useState, useEffect, useRef } = React;

        // Custom Inline SVGs for elegant UI (Fully self-contained, no network latency dependencies)
        const Icons = {
            Dashboard: () => (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" />
                </svg>
            ),
            Trophy: () => (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14a3 3 0 100-6 3 3 0 000 6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v5m-4 2h8M4 7h16M4 7c0 3 2 5 5 5h6c3 0 5-2 5-5M4 7V5h16v2" />
                </svg>
            ),
            Brain: () => (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            Chart: () => (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                </svg>
            ),
            Target: () => (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
            ),
            Shield: () => (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            Briefcase: () => (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            Zap: () => (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        };

        // Expanded Roster - 19 World-Class Players (Necessary for formulating an exact 11-man Fantasy squad)
        const PLAYERS = [
            { id: "vkohli", name: "Virat Kohli", team: "India / RCB", role: "Batsman", rating: 94, avg: 58.7, sr: 138.2, flag: "🇮🇳", strengths: ["Cover Drive", "Chase Control"], weaknesses: ["Left-arm Pace"], recentInnings: [45, 82, 12, 104, 56], bestPerformance: "183 vs SL", avatarColor: "bg-orange-500" },
            { id: "rsharma", name: "Rohit Sharma", team: "India / MI", role: "Batsman", rating: 92, avg: 49.1, sr: 145.4, flag: "🇮🇳", strengths: ["Pull Shot", "Powerplay Hitting"], weaknesses: ["Left-arm Inswing"], recentInnings: [24, 115, 64, 8, 41], bestPerformance: "264 vs SL", avatarColor: "bg-blue-600" },
            { id: "syadav", name: "Suryakumar Yadav", team: "India / MI", role: "Batsman", rating: 93, avg: 46.5, sr: 172.4, flag: "🇮🇳", strengths: ["360 Scope", "Wrist Flick"], weaknesses: ["Wide Slow Ball"], recentInnings: [82, 45, 12, 101, 7], bestPerformance: "117 vs ENG", avatarColor: "bg-blue-500" },
            { id: "ssamson", name: "Sanju Samson", team: "India / RR", role: "Wicketkeeper-Batsman", rating: 89, avg: 41.2, sr: 151.3, flag: "🇮🇳", strengths: ["Lofted Cover", "Pull Shot"], weaknesses: ["Leg Spin Early"], recentInnings: [64, 12, 85, 30, 48], bestPerformance: "119 vs PBKS", avatarColor: "bg-yellow-600" },
            { id: "jbuttler", name: "Jos Buttler", team: "England / RR", role: "Wicketkeeper-Batsman", rating: 91, avg: 41.5, sr: 154.2, flag: "🇬🇧", strengths: ["Reverse Sweep", "Ramp Shot"], weaknesses: ["High Pace Yorker"], recentInnings: [89, 4, 32, 73, 101], bestPerformance: "162 vs NED", avatarColor: "bg-red-500" },
            { id: "rpant", name: "Rishabh Pant", team: "India / DC", role: "Wicketkeeper-Batsman", rating: 90, avg: 43.1, sr: 148.6, flag: "🇮🇳", strengths: ["One-Handed Six", "Reverse Sweep"], weaknesses: ["Off-Spin"], recentInnings: [42, 88, 15, 61, 30], bestPerformance: "146 vs ENG", avatarColor: "bg-cyan-500" },
            { id: "bazam", name: "Babar Azam", team: "Pakistan", role: "Batsman", rating: 91, avg: 55.4, sr: 129.8, flag: "🇵🇰", strengths: ["Straight Drive", "Late Cut"], weaknesses: ["Spin in Middle"], recentInnings: [67, 34, 110, 2, 85], bestPerformance: "158 vs ENG", avatarColor: "bg-emerald-600" },
            { id: "gmaxwell", name: "Glenn Maxwell", team: "Australia / RCB", role: "All-Rounder", rating: 89, avg: 34.8, sr: 162.5, flag: "🇦🇺", strengths: ["Switch Hit", "Slog Sweep"], weaknesses: ["Express Short Ball"], recentInnings: [108, 15, 4, 120, 22], bestPerformance: "201* vs AFG", avatarColor: "bg-yellow-500" },
            { id: "snarine", name: "Sunil Narine", team: "West Indies / KKR", role: "All-Rounder", rating: 92, avg: 31.2, sr: 168.4, flag: "🌴", strengths: ["Carrom Ball", "Powerplay Pinch-Hit"], weaknesses: ["High Bounce short leg"], recentInnings: [30, 85, 2, 41, 15], bestPerformance: "85 vs DC", avatarColor: "bg-purple-600" },
            { id: "siyer", name: "Shreyas Iyer", team: "India / KKR", role: "Batsman", rating: 88, avg: 39.4, sr: 135.2, flag: "🇮🇳", strengths: ["Spin loft", "Anchor pacing"], weaknesses: ["Short Ball pace"], recentInnings: [50, 12, 17, 39, 45], bestPerformance: "113 vs SA", avatarColor: "bg-purple-500" },
            { id: "jbumrah", name: "Jasprit Bumrah", team: "India / MI", role: "Bowler", rating: 96, avg: 22.4, econ: 6.8, wickets: 320, flag: "🇮🇳", strengths: ["Yorkers", "Slower Balls"], weaknesses: ["Fielding conditions"], recentInnings: [3, 1, 4, 2, 2], bestPerformance: "6/19 vs ENG", avatarColor: "bg-cyan-600" },
            { id: "safridi", name: "Shaheen Afridi", team: "Pakistan", role: "Bowler", rating: 93, avg: 24.1, econ: 7.4, wickets: 245, flag: "🇵🇰", strengths: ["Powerplay Swing", "Inswinging Yorker"], weaknesses: ["Death Over hitting"], recentInnings: [2, 3, 0, 4, 1], bestPerformance: "6/35 vs BAN", avatarColor: "bg-green-700" },
            { id: "rkhan", name: "Rashid Khan", team: "Afghanistan / GT", role: "Bowler", rating: 94, avg: 19.8, econ: 6.3, wickets: 410, flag: "🇦🇫", strengths: ["Googly", "Accuracy"], weaknesses: ["Extremely wet outfield"], recentInnings: [3, 2, 1, 3, 4], bestPerformance: "7/18 vs WI", avatarColor: "bg-blue-800" },
            { id: "mstarc", name: "Mitchell Starc", team: "Australia / KKR", role: "Bowler", rating: 91, avg: 25.0, econ: 7.8, wickets: 340, flag: "🇦🇺", strengths: ["Lethal inswinging yorker", "Late reverse swing"], weaknesses: ["Flat tracks economy"], recentInnings: [1, 4, 2, 0, 3], bestPerformance: "6/28 vs NZ", avatarColor: "bg-yellow-600" },
            { id: "ychahal", name: "Yuzvendra Chahal", team: "India / RR", role: "Bowler", rating: 90, avg: 23.4, econ: 7.6, wickets: 200, flag: "🇮🇳", strengths: ["Flighted legbreak", "Googly outside off"], weaknesses: ["Small boundary tracking"], recentInnings: [2, 3, 1, 0, 4], bestPerformance: "6/25 vs ENG", avatarColor: "bg-yellow-500" },
            { id: "pcummins", name: "Pat Cummins", team: "Australia / SRH", role: "All-Rounder", rating: 92, avg: 28.5, sr: 142.1, flag: "🇦🇺", strengths: ["Leadership", "Hard length cutters"], weaknesses: ["Very slow tracks"], recentInnings: [15, 30, 2, 1, 3], bestPerformance: "4/34 vs IND", avatarColor: "bg-amber-600" },
            { id: "thead", name: "Travis Head", team: "Australia / SRH", role: "Batsman", rating: 91, avg: 45.4, sr: 174.5, flag: "🇦🇺", strengths: ["Powerplay loft", "Square slash"], weaknesses: ["Left-arm spin"], recentInnings: [89, 12, 102, 34, 15], bestPerformance: "137 vs IND", avatarColor: "bg-amber-500" },
            { id: "hklaasen", name: "Heinrich Klaasen", team: "South Africa / SRH", role: "Wicketkeeper-Batsman", rating: 93, avg: 44.2, sr: 178.6, flag: "🇿🇦", strengths: ["Spin lofting", "Backfoot pull"], weaknesses: ["Searing yorkers"], recentInnings: [64, 42, 11, 80, 50], bestPerformance: "109 vs ENG", avatarColor: "bg-orange-600" },
            { id: "apatel", name: "Axar Patel", team: "India / DC", role: "All-Rounder", rating: 89, avg: 28.4, sr: 139.5, flag: "🇮🇳", strengths: ["Arm ball accuracy", "Clean hitting"], weaknesses: ["Looping turning tracks"], recentInnings: [24, 30, 1, 2, 0], bestPerformance: "5/24 vs SA", avatarColor: "bg-cyan-500" }
        ];

        const VENUES = [
            { id: "mcg", name: "Melbourne Cricket Ground (MCG)", location: "Australia", pitchType: "Balanced / Bounce", windFactor: "High", avgScore: 165 },
            { id: "lords", name: "Lord's Cricket Ground", location: "England", pitchType: "Green / Seam Swing", windFactor: "Medium", avgScore: 152 },
            { id: "wankhede", name: "Wankhede Stadium", location: "India", pitchType: "Flat / Batting Friendly", windFactor: "Seabreeze (High)", avgScore: 192 },
            { id: "eden", name: "Eden Gardens", location: "India", pitchType: "Spin / Slow Pitch", windFactor: "Low", avgScore: 160 },
            { id: "narendra_modi", name: "Narendra Modi Stadium", location: "India", pitchType: "Cracked / Multi-Tiered", windFactor: "Medium", avgScore: 178 }
        ];

        const INITIAL_IPL_STANDINGS = [
            { id: "KKR", team: "Kolkata Knight Riders", played: 13, won: 9, lost: 4, points: 18, nrr: 0.82, status: "Q" },
            { id: "RR", team: "Rajasthan Royals", played: 13, won: 8, lost: 5, points: 16, nrr: 0.45, status: "Q" },
            { id: "SRH", team: "Sunrisers Hyderabad", played: 14, won: 8, lost: 6, points: 16, nrr: 0.31, status: "Q" },
            { id: "LSG", team: "Lucknow Super Giants", played: 14, won: 7, lost: 7, points: 14, nrr: -0.12, status: "In Pool" },
            { id: "DC", team: "Delhi Capitals", played: 13, won: 7, lost: 6, points: 14, nrr: -0.05, status: "In Pool" },
            { id: "RCB", team: "Royal Challengers Bengaluru", played: 14, won: 7, lost: 7, points: 14, nrr: -0.15, status: "In Pool" },
            { id: "MI", team: "Mumbai Indians", played: 13, won: 6, lost: 7, points: 12, nrr: 0.10, status: "In Pool" },
            { id: "CSK", team: "Chennai Super Kings", played: 14, won: 6, lost: 8, points: 12, nrr: -0.22, status: "Eliminated" },
            { id: "PBKS", team: "Punjab Kings", played: 14, won: 5, lost: 9, points: 10, nrr: -0.34, status: "Eliminated" },
            { id: "GT", team: "Gujarat Titans", played: 14, won: 5, lost: 9, points: 10, nrr: -0.45, status: "Eliminated" }
        ];

        // Simulated Over scripts for Match Center tab
        const IPL_MATCH_SIMULATIONS = {
            match_69: {
                matchName: "Match 69: MI vs RR",
                venue: "Wankhede Stadium, Mumbai",
                tourney: "IPL 2026 League Stage (League Decider)",
                teams: { teamA: "Mumbai Indians", teamB: "Rajasthan Royals" },
                overs: [
                    { over: 1, score: "10/0", bats: "R. Sharma (6*) | I. Kishan (4*)", bowl: "T. Boult", commentary: "Trent Boult opens the bowling with late inswing. Rohit Sharma stands tall and loft-punches him over mid-on for a pristine FOUR! Wankhede erupts.", probA: 52 },
                    { over: 2, score: "22/0", bats: "R. Sharma (12*) | I. Kishan (10*)", bowl: "A. Burger", commentary: "Burger from the other end. Kishan whips a cracking pull shot past square leg for another boundary. Fast outfield on display.", probA: 55 },
                    { over: 3, score: "35/0", bats: "R. Sharma (24*) | I. Kishan (11*)", bowl: "T. Boult", commentary: "SIX! Vintage Rohit Sharma! Boult bowls a short delivery, and Rohit hooks it deep into the Wankhede crowd. 92 meters!", probA: 62 },
                    { over: 4, score: "38/1", bats: "R. Sharma (25*) | S. Yadav (2*)", bowl: "A. Burger", commentary: "OUT! Kishan slices Burger's delivery straight to Sanju Samson behind the stumps. First breakthrough! In comes SKY.", probA: 50 },
                    { over: 5, score: "50/1", bats: "R. Sharma (31*) | S. Yadav (8*)", bowl: "R. Ashwin", commentary: "Ashwin into the attack early. Suryakumar sweeps him first ball through square leg for FOUR. Excellent placement.", probA: 53 },
                    { over: 6, score: "62/1", bats: "R. Sharma (35*) | S. Yadav (16*)", bowl: "S. Sharma", commentary: "Sandeep Sharma misses his line. SKY plays his iconic lofted cover drive. Boundary! MI finishes powerplay at a rapid 10.3 rpo.", probA: 57 },
                    { over: 7, score: "71/1", bats: "R. Sharma (39*) | S. Yadav (21*)", bowl: "Y. Chahal", commentary: "Chahal on. Slices some spin early. SKY gets 3 runs off a sweep. Tight over, 9 runs conceded.", probA: 58 },
                    { over: 8, score: "76/2", bats: "S. Yadav (23*) | H. Pandya (1*)", bowl: "R. Ashwin", commentary: "OUT! Rohit Sharma is trapped LBW! Ashwin gets the big fish. Rohit reviews but it's umpire's call. Hardik joins SKY.", probA: 44 },
                    { over: 9, score: "88/2", bats: "S. Yadav (32*) | H. Pandya (4*)", bowl: "Y. Chahal", commentary: "SIX! SKY gets down on one knee and sweeps Chahal flat over backward square leg. Majestic execution.", probA: 48 },
                    { over: 10, score: "99/2", bats: "S. Yadav (41*) | H. Pandya (6*)", bowl: "R. Ashwin", commentary: "Midway through the innings. Ashwin closes a tidy over. The temperature is humid, dew factor expected to index up later.", probA: 50 },
                    { over: 11, score: "110/2", bats: "S. Yadav (50*) | H. Pandya (8*)", bowl: "Y. Chahal", commentary: "FIFTY for Suryakumar Yadav in just 26 balls! Reaches it with a classic wristy flick down past fine leg. Wankhede chanting SKY!", probA: 56 },
                    { over: 12, score: "118/3", bats: "H. Pandya (12*) | T. David (1*)", bowl: "T. Boult", commentary: "OUT! Trent Boult returns and gets Suryakumar Yadav! SKY tries to slice over point but holes out to Jaiswal. Huge wicket!", probA: 42 },
                    { over: 13, score: "129/3", bats: "H. Pandya (18*) | T. David (6*)", bowl: "S. Sharma", commentary: "FOUR! Tim David slams a length ball straight back past the bowler. Sandeep Sharma couldn't even react.", probA: 46 },
                    { over: 14, score: "139/4", bats: "T. David (11*) | G. Coetzee (1*)", bowl: "Y. Chahal", commentary: "OUT! Hardik tries to go big but finds the long-on fielder! Chahal gets his man. MI slip to 4 down.", probA: 38 },
                    { over: 15, score: "151/4", bats: "T. David (20*) | G. Coetzee (4*)", bowl: "A. Burger", commentary: "SIX! Tim David stands tall and clears his front leg, launching Burger deep over cow corner. Brutal hitting.", probA: 45 },
                    { over: 16, score: "163/4", bats: "T. David (28*) | G. Coetzee (8*)", bowl: "T. Boult", commentary: "FOUR! Coetzee slashes hard, gets a thick outside edge that flies past short third man. Boundary to Mumbai Indians.", probA: 51 },
                    { over: 17, score: "172/5", bats: "T. David (32*) | K. Maphaka (1*)", bowl: "Y. Chahal", commentary: "OUT! Coetzee gets stumped! Chahal outfoxes him with a beautiful wider googly. Samson completes a quick bails-off.", probA: 40 },
                    { over: 18, score: "185/5", bats: "T. David (41*) | K. Maphaka (4*)", bowl: "S. Sharma", commentary: "SIX! Tim David clears the stadium roof! Smashes Sandeep Sharma 104 meters over square leg! Roaring applause.", probA: 49 },
                    { over: 19, score: "194/6", bats: "K. Maphaka (7*) | J. Bumrah (1*)", bowl: "T. Boult", commentary: "OUT! Tim David gets caught trying to clear long-off! Trent Boult takes the crucial wicket. David goes for a fighting 48.", probA: 36 },
                    { over: 20, score: "204/6", bats: "K. Maphaka (12*) | J. Bumrah (4*)", bowl: "S. Sharma", commentary: "Bumrah finishes the innings with a flick for a boundary! MI finishes at 204/6. Extreme momentum shift at Wankhede!", probA: 54 }
                ]
            },
            match_70: {
                matchName: "Match 70: KKR vs DC",
                venue: "Eden Gardens, Kolkata",
                tourney: "IPL 2026 League Stage (Playoff Decider)",
                teams: { teamA: "Kolkata Knight Riders", teamB: "Delhi Capitals" },
                overs: [
                    { over: 1, score: "4/0", bats: "P. Salt (3*) | S. Narine (1*)", bowl: "K. Ahmed", commentary: "Khaleel Ahmed opens with beautiful swing on a dry Eden surface. Tight lines, Salt defends cautiously.", probA: 51 },
                    { over: 2, score: "15/0", bats: "P. Salt (11*) | S. Narine (4*)", bowl: "I. Sharma", commentary: "FOUR! Phil Salt steps out and lofts Ishant Sharma over mid-off. Fast and flat boundary.", probA: 54 },
                    { over: 3, score: "28/0", bats: "P. Salt (16*) | S. Narine (12*)", bowl: "K. Ahmed", commentary: "SIX! Sunil Narine unleashes a high swing over deep point! Classic Narine boundary hitting.", probA: 59 },
                    { over: 4, score: "34/1", bats: "S. Narine (13*) | S. Iyer (1*)", bowl: "I. Sharma", commentary: "OUT! Salt tries to pull, gets a top edge and caught by deep square leg. Ishant strikes. In comes captain Shreyas.", probA: 46 },
                    { over: 5, score: "45/1", bats: "S. Narine (21*) | S. Iyer (4*)", bowl: "A. Patel", commentary: "Axar Patel introduced. Narine sweeps him through square leg for FOUR. Eden pitch is showing dry clay turning spin.", probA: 48 },
                    { over: 6, score: "58/1", bats: "S. Narine (30*) | S. Iyer (8*)", bowl: "K. Yadav", commentary: "End of Powerplay. Narine greets Kuldeep Yadav with a magnificent flat SIX over long-on.", probA: 54 },
                    { over: 7, score: "64/2", bats: "S. Iyer (10*) | V. Iyer (1*)", bowl: "A. Patel", commentary: "OUT! Narine is clean bowled by Axar Patel! Plays for turn but the ball goes straight through. Big wicket for DC!", probA: 44 },
                    { over: 8, score: "72/2", bats: "S. Iyer (14*) | V. Iyer (5*)", bowl: "K. Yadav", commentary: "Kuldeep gets massive spin deviation of 4.2 degrees. Only 8 runs off the over.", probA: 46 },
                    { over: 9, score: "81/2", bats: "S. Iyer (18*) | V. Iyer (10*)", bowl: "A. Patel", commentary: "Venkatesh Iyer plays a delicate late sweep for FOUR. Spinners checking lengths under humid Kolkata weather.", probA: 49 },
                    { over: 10, score: "90/2", bats: "S. Iyer (22*) | V. Iyer (15*)", bowl: "M. Kumar", commentary: "Mukesh Kumar into the attack. Venkatesh takes a couple of runs down to third man. 9 runs.", probA: 51 },
                    { over: 11, score: "99/3", bats: "V. Iyer (19*) | A. Russell (1*)", bowl: "K. Yadav", commentary: "OUT! Shreyas Iyer is caught behind by Pant! Kuldeep gets his former skipper. Turning point!", probA: 41 },
                    { over: 12, score: "112/3", bats: "V. Iyer (25*) | A. Russell (8*)", bowl: "M. Kumar", commentary: "SIX! Andre Russell launches Mukesh into the upper tier! Power-packed strike.", probA: 49 },
                    { over: 13, score: "120/4", bats: "A. Russell (11*) | R. Singh (1*)", bowl: "K. Yadav", commentary: "OUT! Venkatesh Iyer is trapped LBW by Kuldeep! Eden Gardens is spinning a web now. Rinku Singh walks out.", probA: 40 },
                    { over: 14, score: "135/4", bats: "A. Russell (22*) | R. Singh (5*)", bowl: "A. Patel", commentary: "SIX! Andre Russell slams Axar over long-on. Russellmania starts at Eden!", probA: 48 },
                    { over: 15, score: "145/4", bats: "A. Russell (28*) | R. Singh (9*)", bowl: "K. Ahmed", commentary: "Rinku Singh plays a gorgeous flick past short fine leg for FOUR. Excellent pacing.", probA: 53 },
                    { over: 16, score: "153/5", bats: "R. Singh (12*) | R. Ramdeep (1*)", bowl: "M. Kumar", commentary: "OUT! Andre Russell gets caught at deep cover! Mukesh Kumar's slower ball works again.", probA: 41 },
                    { over: 17, score: "164/5", bats: "R. Singh (20*) | R. Ramdeep (4*)", bowl: "K. Ahmed", commentary: "Rinku sweeps fine for a boundary. KKR clawing back under heavy pressure.", probA: 47 },
                    { over: 18, score: "176/5", bats: "R. Singh (30*) | R. Ramdeep (6*)", bowl: "I. Sharma", commentary: "SIX! Rinku Singh sends it into the stands! Phenonemal final-over powerplay.", probA: 54 },
                    { over: 19, score: "185/6", bats: "R. Ramdeep (9*) | M. Starc (1*)", bowl: "M. Kumar", commentary: "OUT! Rinku is caught at long-off! Tries to clear the ropes but holes out. Fighting 35.", probA: 43 },
                    { over: 20, score: "196/6", bats: "R. Ramdeep (16*) | M. Starc (4*)", bowl: "K. Ahmed", commentary: "KKR finishes at 196/6. Strong spinning defense ahead at Eden Gardens!", probA: 59 }
                ]
            },
            qualifier_1: {
                matchName: "Qualifier 1: KKR vs RR",
                venue: "HPCA Stadium, Dharamshala",
                tourney: "IPL 2026 Playoffs (May 26, 2026)",
                teams: { teamA: "Kolkata Knight Riders", teamB: "Rajasthan Royals" },
                overs: [
                    { over: 1, score: "8/0", bats: "P. Salt (4*) | S. Narine (4*)", bowl: "T. Boult", commentary: "Dharamshala green pitch under lights. Trent Boult gets early swing, but Salt slams a cover drive for FOUR.", probA: 52 },
                    { over: 5, score: "42/1", bats: "S. Narine (20*) | S. Iyer (12*)", bowl: "A. Burger", commentary: "Wind is whistling from the Himalayan range. Ball is flying. Narine pulls Burger for a maximum.", probA: 55 },
                    { over: 10, score: "84/2", bats: "S. Iyer (34*) | V. Iyer (15*)", bowl: "Y. Chahal", commentary: "Dew settling on the Dharamshala grass. Chahal struggles with wet ball grip. Boundary rates scaling.", probA: 59 },
                    { over: 15, score: "135/3", bats: "V. Iyer (42*) | A. Russell (18*)", bowl: "R. Ashwin", commentary: "Russell slams Ashwin straight down the ground for a gigantic 102m SIX! Crowd in awe.", probA: 64 },
                    { over: 20, score: "188/5", bats: "A. Russell (45*) | R. Singh (6*)", bowl: "S. Sharma", commentary: "KKR closes at 188/5. Pitch shows high bounce and pace carry. Will be a great chase for RR!", probA: 68 }
                ]
            },
            eliminator: {
                matchName: "Eliminator: SRH vs DC",
                venue: "New International Cricket Stadium, New Chandigarh",
                tourney: "IPL 2026 Playoffs (May 27, 2026)",
                teams: { teamA: "Sunrisers Hyderabad", teamB: "Delhi Capitals" },
                overs: [
                    { over: 1, score: "5/0", bats: "T. Head (2*) | A. Sharma (3*)", bowl: "K. Ahmed", commentary: "High-pressure Eliminator under Chandigarh lights. Khaleel keeps Travis Head quiet early on.", probA: 50 },
                    { over: 5, score: "34/1", bats: "T. Head (15*) | H. Klaasen (11*)", bowl: "A. Patel", commentary: "Axar bowls beautifully. SRH batting aggressively but DC bowlers keeping tight lines.", probA: 48 },
                    { over: 10, score: "70/2", bats: "H. Klaasen (28*) | N. Reddy (12*)", bowl: "K. Yadav", commentary: "Strategic timeout. Average score here is 165. Kuldeep gets massive turn, containing Klaasen.", probA: 51 },
                    { over: 15, score: "115/4", bats: "N. Reddy (32*) | A. Samad (8*)", bowl: "M. Kumar", commentary: "OUT! Klaasen caught at deep mid-wicket! Massive blow for SRH. DC capitalising on pressure.", probA: 42 },
                    { over: 20, score: "166/6", bats: "A. Samad (28*) | P. Cummins (4*)", bowl: "K. Ahmed", commentary: "SRH registers a competitive 166/6. Chandergarh boundary sizes are large. Game on!", probA: 52 }
                ]
            }
        };

        const IPL_UPCOMING_FIXTURES = [
            { id: "q1", date: "May 26, 2026 (Tue)", match: "Qualifier 1 (#1 vs #2)", venue: "HPCA Stadium, Dharamshala", time: "7:30 PM IST" },
            { id: "elim", date: "May 27, 2026 (Wed)", match: "Eliminator (#3 vs #4)", venue: "New International Stadium, Chandigarh", time: "7:30 PM IST" },
            { id: "q2", date: "May 29, 2026 (Fri)", match: "Qualifier 2 (Loser of Q1 vs Winner of Elim)", venue: "New International Stadium, Chandigarh", time: "7:30 PM IST" },
            { id: "final", date: "May 31, 2026 (Sun)", match: "IPL 2026 Grand Final (Winner of Q1 vs Q2)", venue: "Narendra Modi Stadium, Ahmedabad", time: "7:30 PM IST" }
        ];

        function App() {
            const [currentTab, setCurrentTab] = useState("iplMatchCenter");
            const [selectedPredictorPlayer, setSelectedPredictorPlayer] = useState("vkohli");
            const [selectedPredictorOpponent, setSelectedPredictorOpponent] = useState("Australia");
            const [selectedPredictorVenue, setSelectedPredictorVenue] = useState("mcg");
            const [selectedPredictorPitch, setSelectedPredictorPitch] = useState("Balanced / Bounce");
            const [selectedPredictorWeather, setSelectedPredictorWeather] = useState("Sunny");
            const [isPredicting, setIsPredicting] = useState(false);
            const [predictionResult, setPredictionResult] = useState(null);
            const [predictionLog, setPredictionLog] = useState([]);

            // Live Match Sim State
            const [selectedSimMatchId, setSelectedSimMatchId] = useState("match_69");
            const [simIndex, setSimIndex] = useState(0);
            const [isSimPlaying, setIsSimPlaying] = useState(false);
            const [simHistory, setSimHistory] = useState([IPL_MATCH_SIMULATIONS.match_69.overs[0]]);

            // Shot Analysis - Highly Interactive Skeletal Controls!
            const [selectedShotType, setSelectedShotType] = useState("Cover Drive");
            const [hoveredWheelZone, setHoveredWheelZone] = useState(null);
            const [cvPoseActiveNode, setCvPoseActiveNode] = useState("Front Elbow");
            const [yoloBboxEnabled, setYoloBboxEnabled] = useState(true);

            // Dynamic Pose Angles controlled by User Sliders!
            const [sliderElbow, setSliderElbow] = useState(142);
            const [sliderKnee, setSliderKnee] = useState(128);
            const [sliderBatAngle, setSliderBatAngle] = useState(42);
            const [sliderShoulder, setSliderShoulder] = useState(15);

            // Fantasy Builder State
            const [fantasyStrategy, setFantasyStrategy] = useState("Optimal (Safe)");
            const [isGeneratingFantasy, setIsGeneratingFantasy] = useState(false);
            const [fantasySquad, setFantasySquad] = useState(null);

            // Portfolio Interactive Sliders State
            const [portStrikeRate, setPortStrikeRate] = useState(140);
            const [portEconomy, setPortEconomy] = useState(7.5);
            const [portMatches, setPortMatches] = useState(30);
            const [portIsInternational, setPortIsInternational] = useState(true);
            const [portPredictedBid, setPortPredictedBid] = useState(6.4);

            // Contact Form
            const [contactSubmitted, setContactSubmitted] = useState(false);
            const [contactForm, setContactForm] = useState({ name: "", email: "", org: "", message: "", budget: "Medium" });

            // IPL Playoff Decision Toggles
            const [iplSimMiWins, setIplSimMiWins] = useState(false);
            const [iplSimDcWins, setIplSimDcWins] = useState(true);
            const [computedStandings, setComputedStandings] = useState(INITIAL_IPL_STANDINGS);
            const [playoffBracket, setPlayoffBracket] = useState({ q1: [], elim: [] });

            // IPL Match 69 ball simulation
            const [iplBallIndex, setIplBallIndex] = useState(0);
            const [iplBallLog, setIplBallLog] = useState([
                { ball: "18.1", desc: "Trent Boult to Suryakumar Yadav, OUT! Massive wicket! Suryakumar goes for the lofted scoop, gets clean-bowled by a searing 142km/h yorker! Wankhede is dead silent.", score: "172/5", probMI: 42 }
            ]);
            const [isIplSimRunning, setIsIplSimRunning] = useState(false);

            // Sync baseline posture values when shot changes
            useEffect(() => {
                if (selectedShotType === "Cover Drive") {
                    setSliderElbow(142);
                    setSliderKnee(128);
                    setSliderBatAngle(42);
                    setSliderShoulder(15);
                } else if (selectedShotType === "Pull Shot") {
                    setSliderElbow(168);
                    setSliderKnee(172);
                    setSliderBatAngle(78);
                    setSliderShoulder(-18);
                } else {
                    setSliderElbow(110);
                    setSliderKnee(95);
                    setSliderBatAngle(15);
                    setSliderShoulder(35);
                }
            }, [selectedShotType]);

            // Trigger simulation reload when selecting a different match
            useEffect(() => {
                resetSimulation(selectedSimMatchId);
            }, [selectedSimMatchId]);

            // Calculate IPL Standings and Bracket based on user toggles
            useEffect(() => {
                let currentTable = INITIAL_IPL_STANDINGS.map(item => ({ ...item }));
                
                let miRow = currentTable.find(t => t.id === "MI");
                let rrRow = currentTable.find(t => t.id === "RR");
                miRow.played = 14;
                rrRow.played = 14;
                if (iplSimMiWins) {
                    miRow.won += 1;
                    miRow.points += 2;
                    miRow.nrr += 0.15;
                    rrRow.lost += 1;
                    rrRow.nrr -= 0.15;
                } else {
                    rrRow.won += 1;
                    rrRow.points += 2;
                    rrRow.nrr += 0.12;
                    miRow.lost += 1;
                    miRow.nrr -= 0.12;
                }

                let kkrRow = currentTable.find(t => t.id === "KKR");
                let dcRow = currentTable.find(t => t.id === "DC");
                kkrRow.played = 14;
                dcRow.played = 14;
                if (iplSimDcWins) {
                    dcRow.won += 1;
                    dcRow.points += 2;
                    dcRow.nrr += 0.18;
                    kkrRow.lost += 1;
                    kkrRow.nrr -= 0.18;
                } else {
                    kkrRow.won += 1;
                    kkrRow.points += 2;
                    kkrRow.nrr += 0.14;
                    dcRow.lost += 1;
                    dcRow.nrr -= 0.14;
                }

                currentTable.sort((a, b) => {
                    if (b.points !== a.points) return b.points - a.points;
                    return b.nrr - a.nrr;
                });

                let top4 = currentTable.slice(0, 4);
                let q1 = [top4[0].id, top4[1].id];
                let elim = [top4[2].id, top4[3].id];

                currentTable = currentTable.map((item, index) => {
                    let rank = index + 1;
                    let status = "Eliminated";
                    if (rank <= 2) status = "Qualified (Q1/Q2)";
                    else if (rank <= 4) status = "Qualified (Eliminator)";
                    return { ...item, rank, status };
                });

                setComputedStandings(currentTable);
                setPlayoffBracket({ q1, elim });

            }, [iplSimMiWins, iplSimDcWins]);

            // Simulation of IPL Match 69 Death overs
            useEffect(() => {
                let interval = null;
                const matchesLogs = [
                    { ball: "18.2", desc: "Trent Boult to Hardik Pandya, 1 Run. Slower off-cutter outside off. Pandya punches to deep cover for a single to get off strike.", score: "173/5", probMI: 43 },
                    { ball: "18.3", desc: "Trent Boult to Tim David, SIX! MASSIVE! Slower length ball, David reads it out of the hand, stands tall and launches it 98 meters over long-on! What a response!", score: "179/5", probMI: 56 },
                    { ball: "18.4", desc: "Trent Boult to Tim David, FOUR! Boult misses the yorker. Full toss on the pads, whipped backward square leg. Wankhede is bouncing!", score: "183/5", probMI: 64 },
                    { ball: "18.5", desc: "Trent Boult to Tim David, OUT! Cleaned him up! What drama! Boult delivers a pinpoint inswinging yorker at 144km/h. Tim David tries a wild swing, misses, and the stumps are shattered!", score: "183/6", probMI: 48 },
                    { ball: "18.6", desc: "Trent Boult to Gerald Coetzee, Dot ball. Excellent high bounce. Coetzee misses the swing. Crucial over ends.", score: "183/6", probMI: 45 },
                    { ball: "19.1", desc: "Sandeep Sharma to Hardik Pandya, SIX! Incredible shot! Sandeep attempts a wide yorker, Hardik reaches out and lofts it cleanly over deep extra cover. Perfect balance!", score: "189/6", probMI: 58 },
                    { ball: "19.2", desc: "Sandeep Sharma to Hardik Pandya, OUT! In the air... and caught! Sandeep goes slower again, Hardik tries to repeat the shot but skies it to long-off. Chahal takes an easy catch under pressure.", score: "189/7", probMI: 43 },
                    { ball: "19.3", desc: "Sandeep Sharma to Jasprit Bumrah, 1 Run. Bumrah gets a thick edge down to third man. Quick single.", score: "190/7", probMI: 44 },
                    { ball: "19.4", desc: "Sandeep Sharma to Gerald Coetzee, FOUR! Pure power! Coetzee clears his front leg and hits a flat bullet down past the bowler for a crucial boundary.", score: "194/7", probMI: 52 },
                    { ball: "19.5", desc: "Sandeep Sharma to Gerald Coetzee, 2 Runs. Slower ball, swiped to deep mid-wicket. Good running by the tailenders.", score: "196/7", probMI: 55 },
                    { ball: "19.6", desc: "Sandeep Sharma to Gerald Coetzee, FOUR! Unbelievable finish! Coetzee slashes hard at a wide delivery, gets a thick outside edge that flies past the short third man fielder to the boundary! MI finishes at 200/7!", score: "200/7", probMI: 62 }
                ];

                if (isIplSimRunning) {
                    interval = setInterval(() => {
                        setIplBallIndex(prev => {
                            const next = prev + 1;
                            if (next >= matchesLogs.length) {
                                setIsIplSimRunning(false);
                                return prev;
                            }
                            setIplBallLog(prevHistory => [...prevHistory, matchesLogs[next]]);
                            return next;
                        });
                    }, 2400);
                } else {
                    clearInterval(interval);
                }
                return () => clearInterval(interval);
            }, [isIplSimRunning]);

            const triggerIplSimulation = () => {
                setIplBallIndex(0);
                setIplBallLog([
                    { ball: "18.1", desc: "Trent Boult to Suryakumar Yadav, OUT! Massive wicket! Suryakumar goes for the lofted scoop, gets clean-bowled by a searing 142km/h yorker! Wankhede is dead silent.", score: "172/5", probMI: 42 }
                ]);
                setIsIplSimRunning(true);
            };

            // Calculate Portfolio Bid Value dynamically
            useEffect(() => {
                let base = 1.0; 
                if (portStrikeRate > 120) base += (portStrikeRate - 120) * 0.12;
                const econDiff = 9.0 - portEconomy; 
                base += econDiff * 0.9;
                base += portMatches * 0.04;
                if (portIsInternational) base += 3.5;
                else base += 0.5;
                base = Math.max(1.2, Math.min(24.5, base));
                setPortPredictedBid(parseFloat(base.toFixed(2)));
            }, [portStrikeRate, portEconomy, portMatches, portIsInternational]);

            // Over-by-over simulator loop
            useEffect(() => {
                let interval = null;
                if (isSimPlaying) {
                    interval = setInterval(() => {
                        setSimIndex(prev => {
                            const next = prev + 1;
                            const matchData = IPL_MATCH_SIMULATIONS[selectedSimMatchId];
                            if (next >= matchData.overs.length) {
                                setIsSimPlaying(false);
                                return prev;
                            }
                            setSimHistory(prevHistory => [...prevHistory, matchData.overs[next]]);
                            return next;
                        });
                    }, 2200);
                } else {
                    clearInterval(interval);
                }
                return () => clearInterval(interval);
            }, [isSimPlaying, selectedSimMatchId]);

            const resetSimulation = (matchId = "match_69") => {
                setSimIndex(0);
                setIsSimPlaying(false);
                setSimHistory([IPL_MATCH_SIMULATIONS[matchId].overs[0]]);
            };

            const runPerformancePrediction = () => {
                setIsPredicting(true);
                setPredictionLog([]);
                
                const steps = [
                    "Retrieving historical player telemetry...",
                    "Analyzing venue wind index & moisture variables...",
                    "Computing head-to-head bowler-batsman matchups...",
                    "Running 10,000 Monte-Carlo simulations...",
                    "Generating final AI prediction telemetry..."
                ];

                steps.forEach((step, idx) => {
                    setTimeout(() => {
                        setPredictionLog(prev => [...prev, `[System AI] ${step}`]);
                        if (idx === steps.length - 1) {
                            const playerObj = PLAYERS.find(p => p.id === selectedPredictorPlayer);
                            const venueObj = VENUES.find(v => v.id === selectedPredictorVenue);
                            
                            let predictedRuns = 0;
                            let predictedWickets = 0;
                            let confidenceScore = 85;

                            if (playerObj.role.includes("Bowler")) {
                                predictedWickets = Math.max(1, Math.round(Math.random() * 3 + (selectedPredictorPitch === "Spin / Slow Pitch" && playerObj.id === "rkhan" ? 1 : 0)));
                                predictedRuns = Math.round(Math.random() * 20 + 10);
                            } else {
                                const base = playerObj.avg;
                                const pitchMult = selectedPredictorPitch.includes("Flat") ? 1.2 : selectedPredictorPitch.includes("Green") ? 0.8 : 1.0;
                                predictedRuns = Math.round(base * pitchMult + (Math.random() * 25 - 10));
                            }

                            setPredictionResult({
                                player: playerObj,
                                venue: venueObj,
                                runsRange: playerObj.role.includes("Bowler") ? `${predictedRuns-10}-${predictedRuns+5}` : `${predictedRuns-15}-${predictedRuns+18}`,
                                wicketsRange: playerObj.role.includes("Bowler") ? `${predictedWickets}-${predictedWickets+1}` : "0-0",
                                strikeRateRange: playerObj.role.includes("Bowler") ? "70-95" : `${Math.round(playerObj.sr - 10)}-${Math.round(playerObj.sr + 15)}`,
                                economyRange: playerObj.role.includes("Bowler") ? `${(playerObj.econ - 0.5).toFixed(1)}-${(playerObj.econ + 0.8).toFixed(1)}` : "N/A",
                                confidenceScore: confidenceScore + Math.floor(Math.random() * 10),
                                matchCupRisk: playerObj.role.includes("Bowler") ? "High aggression in death overs" : "Left-arm inswing early on (34% risk)",
                                probabilityOutcomes: [
                                    { label: playerObj.role.includes("Bowler") ? "3+ Wickets" : "50+ Runs", prob: playerObj.role.includes("Bowler") ? "42%" : "58%" },
                                    { label: playerObj.role.includes("Bowler") ? "Economy < 6.5" : "Strike Rate 150+", prob: playerObj.role.includes("Bowler") ? "65%" : "38%" },
                                    { label: "Dismissal under 20 balls", prob: playerObj.role.includes("Bowler") ? "12%" : "24%" }
                                ]
                            });
                            setIsPredicting(false);
                        }
                    }, (idx + 1) * 600);
                });
            };

            // Bulletproof 11-player squad generator with exact balance constraints
            const autoGenerateFantasySquad = () => {
                setIsGeneratingFantasy(true);
                setTimeout(() => {
                    // Shuffling expanded list of 19 players
                    let shuffled = [...PLAYERS].sort(() => 0.5 - Math.random());
                    let squad = [];
                    let totalCost = 0;

                    // Ensure role requirements are filled (Dream11 standards)
                    const wks = shuffled.filter(p => p.role.includes("Wicketkeeper"));
                    const bats = shuffled.filter(p => p.role === "Batsman");
                    const allRounders = shuffled.filter(p => p.role === "All-Rounder");
                    const bowlers = shuffled.filter(p => p.role === "Bowler");

                    // Gather elements to make balanced squad (1 WK, 4 Bats, 2 AllRounders, 4 Bowlers = exactly 11 players)
                    const rawPicks = [
                        wks[0],
                        ...bats.slice(0, 4),
                        ...allRounders.slice(0, 2),
                        ...bowlers.slice(0, 4)
                    ];

                    rawPicks.forEach(p => {
                        let cost = parseFloat((8.0 + Math.random() * 2.0).toFixed(1));
                        let projectedPoints = Math.round(55 + Math.random() * 40);
                        
                        if (fantasyStrategy === "Pace Dominant" && p.strengths.includes("Powerplay Swing")) {
                            projectedPoints += 15;
                        }
                        if (fantasyStrategy === "Optimal (Safe)" && p.rating >= 93) {
                            projectedPoints += 10;
                        }

                        squad.push({ ...p, cost, projectedPoints, isCaptain: false, isViceCaptain: false });
                        totalCost += cost;
                    });

                    // Ensure squad strictly stays within 100 credits. If not, scale costs down.
                    if (totalCost > 100) {
                        const scalingFactor = 95.0 / totalCost;
                        squad = squad.map(p => {
                            p.cost = parseFloat((p.cost * scalingFactor).toFixed(1));
                            return p;
                        });
                        totalCost = squad.reduce((sum, p) => sum + p.cost, 0);
                    }

                    // Assign C & VC
                    squad.sort((a, b) => b.projectedPoints - a.projectedPoints);
                    if (squad.length > 0) squad[0].isCaptain = true;
                    if (squad.length > 1) squad[1].isViceCaptain = true;

                    setFantasySquad({
                        players: squad,
                        totalCost: parseFloat(totalCost.toFixed(1)),
                        projectedTotal: squad.reduce((sum, p) => sum + (p.projectedPoints * (p.isCaptain ? 2 : p.isViceCaptain ? 1.5 : 1)), 0).toFixed(0),
                        confidenceScore: Math.round(86 + Math.random() * 11)
                    });
                    setIsGeneratingFantasy(false);
                }, 1200);
            };

            // Custom Dynamic joint analysis calculations
            const evaluateJointPosture = () => {
                let feedback = "";
                let timingMult = 1.0;
                let catchRisk = 12;

                // Elbow Flexion assessment
                if (sliderElbow >= 135 && sliderElbow <= 145) {
                    feedback += "• Perfect high-elbow alignment providing absolute downswing command. ";
                } else if (sliderElbow > 145) {
                    feedback += "• Warning: Elbow too extended, leading to loose bottom-hand control. ";
                    timingMult -= 0.15;
                } else {
                    feedback += "• Warning: Elbow too compact, restricting horizontal follow-through arc. ";
                    timingMult -= 0.10;
                }

                // Knee Flexion assessment
                if (sliderKnee >= 110 && sliderKnee <= 135) {
                    feedback += "• Excellent deep lunge. Head remains centered directly over ball impact line. ";
                } else {
                    feedback += "• Stance unstable. Shallow knee bend shifts head weight backwards. ";
                    timingMult -= 0.12;
                }

                // Bat angle catching risk calculation
                if (sliderBatAngle > 60) {
                    catchRisk = Math.round((sliderBatAngle - 60) * 2.2 + 25);
                    feedback += `• High Loft Angle: Open bat face boosts catching risk in outfield to ${catchRisk}%. `;
                } else {
                    feedback += "• Controlled Bat Face: Ball safely kept on ground. Catching risk minimal. ";
                }

                return {
                    status: timingMult >= 0.85 ? "Optimal Posture" : "Sub-Optimal Stance",
                    qualityScore: Math.round(100 * timingMult),
                    catchingRisk: catchRisk,
                    verbalFeedback: feedback
                };
            };

            const cvAnalysis = evaluateJointPosture();

            const handleContactSubmit = (e) => {
                e.preventDefault();
                setContactSubmitted(true);
                setTimeout(() => {
                    setContactSubmitted(false);
                    setContactForm({ name: "", email: "", org: "", message: "", budget: "Medium" });
                }, 4000);
            };

            return (
                <div className="flex flex-1 flex-col md:flex-row min-h-screen relative z-10">
                    
                    {/* Left Sidebar Menu */}
                    <aside className="w-full md:w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between shrink-0">
                        <div>
                            {/* Logo */}
                            <div className="p-6 border-b border-slate-800 flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 flex items-center justify-center text-slate-950 font-bold text-xl shadow-neon-glow">
                                    🏏
                                </div>
                                <div>
                                    <h1 className="font-cyber font-bold tracking-wider text-xl text-white">
                                        Cric<span className="text-cyan-400">AI</span>
                                    </h1>
                                    <p className="text-[9px] text-slate-400 tracking-widest uppercase">Predictive Intelligence</p>
                                </div>
                            </div>

                            {/* Navigation */}
                            <nav className="p-4 space-y-1">
                                <button 
                                    onClick={() => setCurrentTab("iplMatchCenter")} 
                                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${currentTab === "iplMatchCenter" ? "bg-amber-950/40 text-amber-400 border border-amber-850 shadow-neon-gold" : "text-slate-400 hover:bg-slate-800/50 hover:text-white"}`}>
                                    <Icons.Trophy />
                                    <span className="flex items-center space-x-2">
                                        <span>IPL Live Center</span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                    </span>
                                </button>
                                <button 
                                    onClick={() => setCurrentTab("dashboard")} 
                                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${currentTab === "dashboard" ? "bg-cyan-950/40 text-cyan-400 border border-cyan-800/50 shadow-neon-glow" : "text-slate-400 hover:bg-slate-800/50 hover:text-white"}`}>
                                    <Icons.Dashboard />
                                    <span>Dashboard Hub</span>
                                </button>
                                <button 
                                    onClick={() => setCurrentTab("predictor")} 
                                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${currentTab === "predictor" ? "bg-cyan-950/40 text-cyan-400 border border-cyan-850 shadow-neon-glow" : "text-slate-400 hover:bg-slate-800/50 hover:text-white"}`}>
                                    <Icons.Brain />
                                    <span>AI Performance Predictor</span>
                                </button>
                                <button 
                                    onClick={() => setCurrentTab("liveInsights")} 
                                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${currentTab === "liveInsights" ? "bg-cyan-950/40 text-cyan-400 border border-cyan-800/50 shadow-neon-glow" : "text-slate-400 hover:bg-slate-800/50 hover:text-white"}`}>
                                    <Icons.Chart />
                                    <span>IPL Live Match Simulator</span>
                                </button>
                                <button 
                                    onClick={() => setCurrentTab("shotTelemetry")} 
                                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${currentTab === "shotTelemetry" ? "bg-cyan-950/40 text-cyan-400 border border-cyan-850 shadow-neon-glow" : "text-slate-400 hover:bg-slate-800/50 hover:text-white"}`}>
                                    <Icons.Target />
                                    <span>Skeletal Shot Telemetry</span>
                                </button>
                                <button 
                                    onClick={() => setCurrentTab("fantasyGenerator")} 
                                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${currentTab === "fantasyGenerator" ? "bg-cyan-950/40 text-cyan-400 border border-cyan-850 shadow-neon-glow" : "text-slate-400 hover:bg-slate-800/50 hover:text-white"}`}>
                                    <Icons.Shield />
                                    <span>Dream 11 AI Squad Builder</span>
                                </button>
                                <button 
                                    onClick={() => setCurrentTab("portfolioHub")} 
                                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${currentTab === "portfolioHub" ? "bg-cyan-950/40 text-cyan-400 border border-cyan-800/50 shadow-neon-glow" : "text-slate-400 hover:bg-slate-800/50 hover:text-white"}`}>
                                    <Icons.Briefcase />
                                    <span>Sports Analyst Portfolio</span>
                                </button>
                            </nav>
                        </div>

                        {/* User Profile */}
                        <div className="p-4 border-t border-slate-800">
                            <div className="flex items-center space-x-3 bg-slate-950/50 p-3 rounded-xl border border-slate-800">
                                <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-xs">
                                    AS
                                </div>
                                <div className="overflow-hidden">
                                    <h4 className="text-xs font-semibold truncate text-slate-200">Arjun Sharma</h4>
                                    <span className="text-[10px] text-emerald-400 font-medium flex items-center space-x-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse mr-1"></span>
                                        Data Engine Active
                                    </span>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Workspace Area */}
                    <main className="flex-1 flex flex-col bg-slate-950 cyber-grid relative overflow-y-auto">
                        
                        {/* Status bar */}
                        <header className="p-4 bg-slate-900/60 border-b border-slate-800 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0 relative z-20">
                            <div className="flex items-center space-x-2">
                                <span className="text-[10px] font-cyber text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded bg-amber-500/10">IPL 2026 ROADMAP</span>
                                <span className="text-slate-500 text-xs">|</span>
                                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">LEAGUE STAGE DECIDER</span>
                            </div>

                            {/* Live Ticker */}
                            <div onClick={() => setCurrentTab("iplMatchCenter")} className="flex items-center space-x-4 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 cursor-pointer hover:border-amber-500/40 transition-all">
                                <div className="flex items-center space-x-2 text-xs">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                    <span className="text-amber-400 font-cyber font-medium tracking-wider">IPL TODAY (MAY 24):</span>
                                    <span className="text-slate-300 font-semibold font-mono">Match 69: MI vs RR | Match 70: KKR vs DC</span>
                                </div>
                            </div>
                        </header>

                        {/* Page Wrapper */}
                        <div className="p-6 md:p-8 max-w-7xl mx-auto w-full flex-1 relative z-10">
                            
                            {/* TAB 0: IPL MATCH DECIDER CENTER */}
                            {currentTab === "iplMatchCenter" && (
                                <div className="space-y-8 animate-fadeIn">
                                    
                                    {/* Playoff Banner */}
                                    <div className="relative overflow-hidden bg-gradient-to-r from-amber-950/40 to-slate-900 border border-amber-500/20 p-8 rounded-3xl backdrop-blur-md">
                                        <div className="absolute right-0 top-0 w-96 h-full bg-gradient-to-l from-amber-500/10 to-transparent pointer-events-none rounded-r-3xl"></div>
                                        <div className="relative z-10 space-y-3">
                                            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3 py-1 rounded-full text-xs font-semibold">
                                                <span>🏆</span>
                                                <span>IPL 2026 LEAGUE DECIDER DAY - MAY 24, 2026</span>
                                            </div>
                                            <h2 className="text-3xl md:text-4xl font-cyber font-extrabold tracking-tight text-white">
                                                IPL PLAYOFFS <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">SCENARIO DECIDER</span>
                                            </h2>
                                            <p className="text-slate-300 max-w-2xl text-sm leading-relaxed">
                                                Today marks the dramatic final matches of the IPL 2026 league stage. <strong>Match 69 (MI vs RR)</strong> at Wankhede and <strong>Match 70 (KKR vs DC)</strong> at Eden Gardens will determine the final play-off seedings. Use our interactive calculators to simulate scenarios!
                                            </p>
                                        </div>
                                    </div>

                                    {/* Playoff Decider Interactive Switches & Standings Table */}
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                        
                                        {/* Left Column: Interactive Scenario Inputs */}
                                        <div className="space-y-6">
                                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
                                                <h3 className="font-cyber text-xs font-bold text-amber-400 tracking-wider uppercase border-b border-slate-800 pb-2">Toggle Simulated Winners</h3>
                                                
                                                <div className="space-y-2">
                                                    <span className="text-xs text-slate-400 block font-semibold">Match 69 (Wankhede - 3:30 PM):</span>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        <button 
                                                            onClick={() => setIplSimMiWins(true)}
                                                            className={`py-2 px-3 rounded-lg text-xs font-cyber font-bold transition-all border ${iplSimMiWins ? "bg-blue-600 text-white border-blue-500 shadow-neon-glow" : "bg-slate-950 text-slate-400 border-slate-800"}`}>
                                                            MI Wins
                                                        </button>
                                                        <button 
                                                            onClick={() => setIplSimMiWins(false)}
                                                            className={`py-2 px-3 rounded-lg text-xs font-cyber font-bold transition-all border ${!iplSimMiWins ? "bg-yellow-600 text-white border-yellow-500 shadow-neon-gold" : "bg-slate-950 text-slate-400 border-slate-800"}`}>
                                                            RR Wins
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="space-y-2 pt-2">
                                                    <span className="text-xs text-slate-400 block font-semibold">Match 70 (Eden Gardens - 7:30 PM):</span>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        <button 
                                                            onClick={() => setIplSimDcWins(true)}
                                                            className={`py-2 px-3 rounded-lg text-xs font-cyber font-bold transition-all border ${iplSimDcWins ? "bg-cyan-600 text-white border-cyan-500 shadow-neon-glow" : "bg-slate-950 text-slate-400 border-slate-800"}`}>
                                                            DC Wins
                                                        </button>
                                                        <button 
                                                            onClick={() => setIplSimDcWins(false)}
                                                            className={`py-2 px-3 rounded-lg text-xs font-cyber font-bold transition-all border ${!iplSimDcWins ? "bg-purple-600 text-white border-purple-500" : "bg-slate-950 text-slate-400 border-slate-800"}`}>
                                                            KKR Wins
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4">
                                                <h3 className="font-cyber text-xs font-bold text-white tracking-wider uppercase border-b border-slate-800 pb-2 flex items-center justify-between">
                                                    <span>Playoff Seeds Projection</span>
                                                    <span className="text-[10px] text-emerald-400 font-mono">UPDATED LIVE</span>
                                                </h3>

                                                <div className="space-y-3">
                                                    <div className="p-3 bg-gradient-to-r from-blue-950/30 to-slate-950 rounded-xl border border-blue-900/40">
                                                        <span className="text-[9px] text-blue-400 font-cyber uppercase tracking-widest block font-bold">Qualifier 1 (#1 vs #2)</span>
                                                        <div className="flex items-center justify-between mt-1 text-xs">
                                                            <span className="font-bold text-slate-200">{playoffBracket.q1[0]}</span>
                                                            <span className="text-slate-500 font-cyber">vs</span>
                                                            <span className="font-bold text-slate-200">{playoffBracket.q1[1]}</span>
                                                        </div>
                                                    </div>

                                                    <div className="p-3 bg-gradient-to-r from-emerald-950/30 to-slate-950 rounded-xl border border-emerald-900/40">
                                                        <span className="text-[9px] text-emerald-400 font-cyber uppercase tracking-widest block font-bold">Eliminator (#3 vs #4)</span>
                                                        <div className="flex items-center justify-between mt-1 text-xs">
                                                            <span className="font-bold text-slate-200">{playoffBracket.elim[0]}</span>
                                                            <span className="text-slate-500 font-cyber">vs</span>
                                                            <span className="font-bold text-slate-200">{playoffBracket.elim[1]}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p className="text-[10px] text-slate-400 leading-relaxed font-sans">
                                                    {iplSimDcWins ? (
                                                        <span>🔥 <strong>Delhi Capitals (DC)</strong> win would elevate them into the Top 4 with 16 points, dramatically knocking out Lucknow Super Giants!</span>
                                                    ) : (
                                                        <span>🛡️ <strong>Kolkata Knight Riders (KKR)</strong> win leaves Delhi Capitals at 14 points, keeping LSG's campaign alive on NRR tiebreaker!</span>
                                                    )}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Standings Table */}
                                        <div className="lg:col-span-2 bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden">
                                            <div className="p-4 border-b border-slate-800 bg-slate-900 flex justify-between items-center">
                                                <h3 className="font-cyber text-xs font-bold text-slate-300 tracking-wider uppercase">Simulated IPL 2026 League Standings</h3>
                                                <span className="text-[10px] text-amber-400 font-mono border border-amber-500/25 bg-amber-500/10 px-2 py-0.5 rounded">Matchday 70 of 70</span>
                                            </div>

                                            <div className="overflow-x-auto">
                                                <table className="w-full text-left text-xs text-slate-300">
                                                    <thead className="bg-slate-950 border-b border-slate-850 text-[10px] text-slate-400 font-cyber tracking-wider">
                                                        <tr>
                                                            <th className="px-4 py-3 text-center">Pos</th>
                                                            <th className="px-4 py-3">Franchise</th>
                                                            <th className="px-4 py-3 text-center">Played</th>
                                                            <th className="px-4 py-3 text-center">Won</th>
                                                            <th className="px-4 py-3 text-center">Points</th>
                                                            <th className="px-4 py-3 text-right">NRR</th>
                                                            <th className="px-4 py-3 text-right">Qualification Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-slate-850 font-sans">
                                                        {computedStandings.map((team, idx) => {
                                                            const isHighlighted = team.id === "MI" || team.id === "RR" || team.id === "KKR" || team.id === "DC";
                                                            return (
                                                                <tr key={team.id} className={`transition-all ${isHighlighted ? "bg-slate-900/80 font-semibold" : "opacity-75 hover:bg-slate-900/20"}`}>
                                                                    <td className="px-4 py-3 text-center font-mono font-bold">
                                                                        {idx + 1}
                                                                    </td>
                                                                    <td className="px-4 py-3 flex items-center space-x-2">
                                                                        <span className={`w-2.5 h-2.5 rounded-full ${team.id === "KKR" ? "bg-purple-600" : team.id === "RR" ? "bg-yellow-500" : team.id === "MI" ? "bg-blue-600" : team.id === "DC" ? "bg-cyan-500" : "bg-slate-700"}`}></span>
                                                                        <span>{team.team} ({team.id})</span>
                                                                    </td>
                                                                    <td className="px-4 py-3 text-center font-mono">{team.played}</td>
                                                                    <td className="px-4 py-3 text-center font-mono text-slate-400">{team.won}</td>
                                                                    <td className={`px-4 py-3 text-center font-mono font-bold ${team.points >= 16 ? "text-emerald-400" : "text-slate-200"}`}>{team.points}</td>
                                                                    <td className={`px-4 py-3 text-right font-mono ${team.nrr > 0 ? "text-emerald-500" : "text-rose-500"}`}>
                                                                        {team.nrr > 0 ? `+${team.nrr.toFixed(2)}` : team.nrr.toFixed(2)}
                                                                    </td>
                                                                    <td className="px-4 py-3 text-right">
                                                                        {team.status.includes("Qualified") ? (
                                                                            <span className="text-[10px] font-cyber font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">PLAYOFFS</span>
                                                                        ) : team.status === "Eliminated" ? (
                                                                            <span className="text-[10px] text-slate-500">Eliminated</span>
                                                                        ) : (
                                                                            <span className="text-[10px] font-cyber font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">POOL DECIDER</span>
                                                                        )}
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                    </div>

                                    {/* Dual Match Analysis Segment */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 font-sans">
                                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
                                            <div className="flex justify-between items-center pb-2 border-b border-slate-850">
                                                <div>
                                                    <span className="text-[9px] font-cyber text-amber-400 uppercase tracking-widest block">MATCH 69 • 3:30 PM IST</span>
                                                    <h3 className="font-cyber font-extrabold text-sm text-white">MUMBAI INDIANS vs RAJASTHAN ROYALS</h3>
                                                </div>
                                                <span className="text-xs text-slate-400 font-mono">Wankhede Stadium, Mumbai</span>
                                            </div>

                                            <div className="space-y-3">
                                                <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 flex items-center justify-between">
                                                    <div>
                                                        <span className="text-[9px] text-red-500 animate-pulse font-bold tracking-wider mr-1">●</span>
                                                        <span className="text-[10px] text-slate-400 uppercase font-mono">LIVE PREDICTOR</span>
                                                        <h4 className="text-xl font-cyber font-black text-white mt-1">MI 196/7 <span className="text-xs font-normal text-slate-500">(19.5 Overs)</span></h4>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="text-[9px] text-slate-500 uppercase tracking-wider block font-mono">Win Probability</span>
                                                        <span className="text-lg font-cyber font-bold text-cyan-400">MI: 55% | RR: 45%</span>
                                                    </div>
                                                </div>

                                                <button 
                                                    onClick={triggerIplSimulation}
                                                    disabled={isIplSimRunning}
                                                    className="w-full py-2 bg-gradient-to-r from-blue-600 to-yellow-500 text-slate-950 font-cyber font-bold tracking-wider text-xs rounded-lg hover:brightness-110 shadow-neon-gold transition-all">
                                                    {isIplSimRunning ? "SIMULATING DEATH OVERS..." : "SIMULATE DEATH OVER COMMENTARY"}
                                                </button>

                                                <div className="h-40 overflow-y-auto bg-slate-950/60 p-3 rounded-xl border border-slate-850 text-xs space-y-2">
                                                    {iplBallLog.slice(0).reverse().map((item, idx) => (
                                                        <div key={idx} className="p-2 bg-slate-900/40 rounded border border-slate-850 flex flex-col space-y-1 animate-fadeIn">
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-[9px] font-mono font-bold text-amber-400">BALL {item.ball}</span>
                                                                <span className="text-[9px] text-slate-500 font-mono">Score: {item.score}</span>
                                                            </div>
                                                            <p className="text-slate-300 leading-relaxed font-sans">{item.desc}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="pt-2">
                                                <h4 className="font-cyber text-[10px] font-bold text-slate-300 tracking-wider uppercase mb-2">Key AI Matchups & Tactical Edge</h4>
                                                <ul className="space-y-2 text-xs text-slate-400">
                                                    <li className="flex items-start space-x-2">
                                                        <span className="text-cyan-400">•</span>
                                                        <span><strong>Suryakumar Yadav vs Yuzvendra Chahal:</strong> Yadav strikes at 178.4 against Chahal, but has been dismissed twice in deep-midwicket sweep attempts.</span>
                                                    </li>
                                                    <li className="flex items-start space-x-2">
                                                        <span className="text-emerald-400">•</span>
                                                        <span><strong>Jasprit Bumrah vs Jos Buttler:</strong> Bumrah has conceded only 48 runs off 52 balls against Buttler in past seasons, getting him out 4 times. Matchup heavily favors MI in the powerplay.</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
                                            <div className="flex justify-between items-center pb-2 border-b border-slate-850">
                                                <div>
                                                    <span className="text-[9px] font-cyber text-purple-400 uppercase tracking-widest block">MATCH 70 • 7:30 PM IST</span>
                                                    <h3 className="font-cyber font-extrabold text-sm text-white">KOLKATA KNIGHT RIDERS vs DELHI CAPITALS</h3>
                                                </div>
                                                <span className="text-xs text-slate-400 font-mono">Eden Gardens, Kolkata</span>
                                            </div>

                                            <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-3">
                                                <div className="flex justify-between items-center border-b border-slate-850 pb-2">
                                                    <span className="text-xs text-slate-300 font-bold">Eden Gardens Pitch Analysis</span>
                                                    <span className="text-[9px] text-emerald-400 font-mono">HEAVY SPIN RATING</span>
                                                </div>
                                                <p className="text-xs text-slate-400 leading-relaxed">
                                                    Dry clay surface with low moisture coefficients. Inning spin indexes are expected to reach up to 4.2° of deviation. Highly advantageous for Sunil Narine and Varun Chakravarthy in the middle overs.
                                                </p>
                                                <div className="grid grid-cols-2 gap-2 text-center text-xs pt-1">
                                                    <div className="bg-slate-900/60 p-2 rounded border border-slate-850">
                                                        <span className="text-[9px] text-slate-500 block uppercase font-mono">Projected Avg Score</span>
                                                        <span className="font-bold text-slate-200">160 - 172</span>
                                                    </div>
                                                    <div className="bg-slate-900/60 p-2 rounded border border-slate-850">
                                                        <span className="text-[9px] text-slate-500 block uppercase font-mono">AI Favorite</span>
                                                        <span className="font-bold text-purple-400">KKR (58% Win Prob)</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="font-cyber text-[10px] font-bold text-slate-300 tracking-wider uppercase mb-2">Strategic Scouting Insights</h4>
                                                <ul className="space-y-2 text-xs text-slate-400">
                                                    <li className="flex items-start space-x-2">
                                                        <span className="text-cyan-400">•</span>
                                                        <span><strong>Kuldeep Yadav vs Shreyas Iyer:</strong> Iyer has historically struggled against leg spin outside the off stump, averaging just 21.4 with a dot ball percentage of 34% against Kuldeep's variations.</span>
                                                    </li>
                                                    <li className="flex items-start space-x-2">
                                                        <span className="text-emerald-400">•</span>
                                                        <span><strong>Sunil Narine vs Rishabh Pant:</strong> Pant has high intent but has been dismissed by Narine 3 times in their last 5 matchups. Chasing under pressure at Eden will test Pant's sweeps.</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="p-4 bg-purple-950/20 border border-purple-500/10 rounded-xl">
                                                <span className="text-[10px] font-cyber font-bold text-purple-400 uppercase tracking-wider block mb-1">Scouting recommendation</span>
                                                <p className="text-[11px] text-slate-300 leading-relaxed">
                                                    KKR is already qualified but fighting to secure position #1 on the table. DC is playing a high stakes match. Expect extreme tactical pressure on DC spinners in the middle overs.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )}

                            {/* TAB 1: DASHBOARD HUB */}
                            {currentTab === "dashboard" && (
                                <div className="space-y-6 animate-fadeIn">
                                    <div className="relative overflow-hidden bg-gradient-to-r from-cyan-950/60 to-slate-900 border border-cyan-500/20 p-8 rounded-3xl backdrop-blur-md">
                                        <div className="absolute right-0 top-0 w-96 h-full bg-gradient-to-l from-cyan-500/10 to-transparent pointer-events-none rounded-r-3xl"></div>
                                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between">
                                            <div className="space-y-3">
                                                <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-3 py-1 rounded-full text-xs font-semibold">
                                                    <Icons.Zap />
                                                    <span>Empowering Sports Decision Intelligence</span>
                                                </div>
                                                <h2 className="text-3xl md:text-4xl font-cyber font-extrabold tracking-tight">
                                                    CRICKET PERFORMANCE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">TELEMETRY & AI</span>
                                                </h2>
                                                <p className="text-slate-300 max-w-xl text-sm leading-relaxed">
                                                    A high-performance AI analytics engine built to forecast player form, visualize real-time match dynamics, study biomechanics telemetry, and build maximum-yield fantasy squads.
                                                </p>
                                            </div>
                                            <div className="mt-6 md:mt-0 flex space-x-4">
                                                <button onClick={() => setCurrentTab("predictor")} className="px-5 py-3 rounded-xl font-medium text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:brightness-110 shadow-neon-glow transition-all text-sm font-cyber">
                                                    Launch Predictor
                                                </button>
                                                <button onClick={() => setCurrentTab("portfolioHub")} className="px-5 py-3 rounded-xl font-medium border border-slate-700 hover:border-slate-500 hover:bg-slate-800/40 text-slate-200 transition-all text-sm font-cyber">
                                                    Explore Portfolio
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Score cards & Stats Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl relative overflow-hidden">
                                            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Models in Production</span>
                                            <div className="flex items-baseline space-x-2 mt-1">
                                                <span className="text-2xl font-cyber font-bold">12 Active</span>
                                                <span className="text-xs text-emerald-400 font-mono">+3 today</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-slate-800 rounded-full mt-4 overflow-hidden">
                                                <div className="h-full bg-cyan-400 w-3/4"></div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl relative overflow-hidden">
                                            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Historical Runs Evaluated</span>
                                            <div className="flex items-baseline space-x-2 mt-1">
                                                <span className="text-2xl font-cyber font-bold">1.24 Million</span>
                                                <span className="text-xs text-cyan-400 font-mono">Ball telemetry</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-slate-800 rounded-full mt-4 overflow-hidden">
                                                <div className="h-full bg-emerald-400 w-[90%]"></div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl relative overflow-hidden">
                                            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Win Predictor Accuracy</span>
                                            <div className="flex items-baseline space-x-2 mt-1">
                                                <span className="text-2xl font-cyber font-bold">84.2%</span>
                                                <span className="text-xs text-indigo-400 font-mono">Test verified</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-slate-800 rounded-full mt-4 overflow-hidden">
                                                <div className="h-full bg-indigo-500 w-[84%]"></div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl relative overflow-hidden">
                                            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Shot Frame Classifier</span>
                                            <div className="flex items-baseline space-x-2 mt-1">
                                                <span className="text-2xl font-cyber font-bold">94.2%</span>
                                                <span className="text-xs text-amber-400 font-mono">YOLOv8 accuracy</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-slate-800 rounded-full mt-4 overflow-hidden">
                                                <div className="h-full bg-amber-500 w-[94%]"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dual Panel Dashboard split */}
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                        
                                        <div className="lg:col-span-2 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6">
                                            <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
                                                <div className="flex items-center space-x-2">
                                                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                                                    <h3 className="font-cyber text-sm font-semibold uppercase tracking-wider">AI Insight Feed</h3>
                                                </div>
                                                <span className="text-[10px] text-slate-400 font-mono">POLLING CHANNELS...</span>
                                            </div>

                                            <div className="space-y-4 font-sans">
                                                <div className="p-4 bg-slate-900/70 border border-slate-800/60 rounded-xl flex items-start space-x-3 hover:border-cyan-500/30 transition-all">
                                                    <div className="mt-1 p-1 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400">
                                                        ⚡
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center space-x-2">
                                                            <span className="text-xs font-bold text-slate-300">Wankhede Pitch Moisture Alteration</span>
                                                            <span className="text-[9px] text-slate-500 font-mono">2 mins ago</span>
                                                        </div>
                                                        <p className="text-xs text-slate-400 mt-1">
                                                            High humidity trend detected. Bowler-induced swing likely to index up by 12.4% in powerplay overs. Suggest choosing Mitchell Starc or Shaheen Afridi as primary swing captains.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="p-4 bg-slate-900/70 border border-slate-800/60 rounded-xl flex items-start space-x-3 hover:border-emerald-500/30 transition-all">
                                                    <div className="mt-1 p-1 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400">
                                                        📈
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center space-x-2">
                                                            <span className="text-xs font-bold text-slate-300">Virat Kohli Inning Momentum High</span>
                                                            <span className="text-[9px] text-slate-500 font-mono">15 mins ago</span>
                                                        </div>
                                                        <p className="text-xs text-slate-400 mt-1">
                                                            Kohli's performance against off-spin in mid-overs at Eden Gardens projected at a rating of 92/100. Target run rate expected to reach 8.4 runs per over during Overs 11-15.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-cyber text-sm font-semibold uppercase tracking-wider mb-4">Interactive Tools</h3>
                                                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-sans">
                                                    Click to jump straight into specialized telemetry modules. This platform offers multi-tier computational features:
                                                </p>

                                                <div className="space-y-3 font-sans font-semibold">
                                                    <div onClick={() => setCurrentTab("shotTelemetry")} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 hover:bg-slate-800/50 cursor-pointer transition-all flex items-center justify-between group">
                                                        <div className="flex items-center space-x-3">
                                                            <span className="text-lg">📈</span>
                                                            <span className="text-xs text-slate-300 group-hover:text-cyan-400">Interactive Wagon Wheel</span>
                                                        </div>
                                                        <span className="text-slate-500 text-xs">→</span>
                                                    </div>

                                                    <div onClick={() => setCurrentTab("liveInsights")} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 hover:bg-slate-800/50 cursor-pointer transition-all flex items-center justify-between group">
                                                        <div className="flex items-center space-x-3">
                                                            <span className="text-lg">🏟️</span>
                                                            <span className="text-xs text-slate-300 group-hover:text-cyan-400">IPL Live Over Simulator</span>
                                                        </div>
                                                        <span className="text-slate-500 text-xs">→</span>
                                                    </div>

                                                    <div onClick={() => setCurrentTab("iplMatchCenter")} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 hover:bg-slate-800/50 cursor-pointer transition-all flex items-center justify-between group">
                                                        <div className="flex items-center space-x-3">
                                                            <span className="text-lg">🏆</span>
                                                            <span className="text-xs text-slate-300 group-hover:text-cyan-400">IPL Playoff Predictor</span>
                                                        </div>
                                                        <span className="text-slate-500 text-xs">→</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-6 pt-4 border-t border-slate-800 text-center">
                                                <span className="text-[10px] text-slate-500 font-mono">DESIGNED & ENGINEERED BY ARJUN SHARMA</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )}

                            {/* TAB 2: AI PERFORMANCE PREDICTOR */}
                            {currentTab === "predictor" && (
                                <div className="space-y-6 animate-fadeIn">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h2 className="text-2xl font-cyber font-bold tracking-tight text-white">AI PLAYER PREDICTOR</h2>
                                            <p className="text-xs text-slate-400">Forecast bowler wickets, batsman runs, and match-up vulnerability ratios via historical telemetry.</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                        {/* Configuration Panel */}
                                        <div className="lg:col-span-1 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-5">
                                            <h3 className="font-cyber text-xs font-bold text-slate-300 tracking-wider uppercase border-b border-slate-800 pb-3">Prediction Parameters</h3>
                                            
                                            <div className="space-y-1.5">
                                                <label className="text-xs text-slate-400 font-medium font-sans">Select Player</label>
                                                <select 
                                                    value={selectedPredictorPlayer}
                                                    onChange={(e) => setSelectedPredictorPlayer(e.target.value)}
                                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500 font-sans">
                                                    {PLAYERS.map(p => (
                                                        <option key={p.id} value={p.id}>{p.flag} {p.name} ({p.role})</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-xs text-slate-400 font-medium font-sans">Opponent Team</label>
                                                <select 
                                                    value={selectedPredictorOpponent}
                                                    onChange={(e) => setSelectedPredictorOpponent(e.target.value)}
                                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500 font-sans">
                                                    <option value="Australia">🇦🇺 Australia</option>
                                                    <option value="India">🇮🇳 India</option>
                                                    <option value="England">🇬🇧 England</option>
                                                    <option value="Pakistan">🇵🇰 Pakistan</option>
                                                    <option value="South Africa">🇿🇦 South Africa</option>
                                                </select>
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-xs text-slate-400 font-medium font-sans">Match Venue</label>
                                                <select 
                                                    value={selectedPredictorVenue}
                                                    onChange={(e) => setSelectedPredictorVenue(e.target.value)}
                                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500 font-sans">
                                                    {VENUES.map(v => (
                                                        <option key={v.id} value={v.id}>{v.name}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-xs text-slate-400 font-medium font-sans">Pitch Type</label>
                                                <select 
                                                    value={selectedPredictorPitch}
                                                    onChange={(e) => setSelectedPredictorPitch(e.target.value)}
                                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500 font-sans">
                                                    <option value="Flat / Batting Friendly">Flat / Batting Friendly</option>
                                                    <option value="Green / Seam Swing">Green / Seaming & Swinging</option>
                                                    <option value="Spin / Slow Pitch">Spin / Slow Dust Bowl</option>
                                                    <option value="Balanced / Bounce">Balanced Bounce & Carry</option>
                                                </select>
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-xs text-slate-400 font-medium font-sans">Weather & Atmospherics</label>
                                                <select 
                                                    value={selectedPredictorWeather}
                                                    onChange={(e) => setSelectedPredictorWeather(e.target.value)}
                                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500 font-sans">
                                                    <option value="Sunny">Sunny / Clear</option>
                                                    <option value="Overcast">Overcast / Heavy Cloud Cover</option>
                                                    <option value="Humid / Dew">Humid / Night Dew Factor</option>
                                                </select>
                                            </div>

                                            <button 
                                                onClick={runPerformancePrediction}
                                                disabled={isPredicting}
                                                className="w-full py-4 rounded-xl font-cyber font-bold text-sm tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-neon-glow hover:brightness-110 transition-all flex items-center justify-center space-x-2 disabled:opacity-55">
                                                {isPredicting ? (
                                                    <span>RUNNING SIMULATION...</span>
                                                ) : (
                                                    <>
                                                        <span>RUN AI PREDICTOR</span>
                                                        <span>🚀</span>
                                                    </>
                                                )}
                                            </button>
                                        </div>

                                        {/* Output Panel */}
                                        <div className="lg:col-span-2 space-y-6">
                                            {isPredicting ? (
                                                <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-12 flex flex-col items-center justify-center text-center h-[500px]">
                                                    <div className="w-16 h-16 rounded-full border-4 border-cyan-500/10 border-t-cyan-500 animate-spin mb-6 font-sans"></div>
                                                    <h3 className="font-cyber font-bold text-lg text-slate-200">Processing Analytics Telemetry</h3>
                                                    <p className="text-xs text-slate-500 mt-2 max-w-sm font-sans font-medium">Please wait while our Monte Carlo models compute matching probabilities against opposing bowling configurations...</p>
                                                    <div className="mt-6 w-full max-w-md bg-slate-950 rounded-xl p-4 border border-slate-800 font-mono text-[10px] text-emerald-400 text-left h-36 overflow-y-auto space-y-1">
                                                        {predictionLog.map((log, idx) => (
                                                            <div key={idx}>{log}</div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : predictionResult ? (
                                                <div className="space-y-6 animate-fadeIn font-sans">
                                                    {/* Top Header Card */}
                                                    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-sans">
                                                        <div className="flex items-center space-x-4">
                                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-bold font-cyber ${predictionResult.player.avatarColor}`}>
                                                                {predictionResult.player.name.split(' ').map(n=>n[0]).join('')}
                                                            </div>
                                                            <div>
                                                                <h3 className="text-xl font-cyber font-bold flex items-center space-x-2">
                                                                    <span>{predictionResult.player.name}</span>
                                                                    <span className="text-xs font-sans font-normal text-slate-400">{predictionResult.player.flag} {predictionResult.player.team}</span>
                                                                </h3>
                                                                <p className="text-xs text-slate-400">Classified as: {predictionResult.player.role}</p>
                                                            </div>
                                                        </div>

                                                        <div className="text-left sm:text-right bg-cyan-950/20 px-4 py-2 rounded-xl border border-cyan-500/10">
                                                            <span className="text-[10px] text-cyan-400 font-bold tracking-wider block">AI CONFIDENCE INDEX</span>
                                                            <span className="text-2xl font-cyber font-black text-cyan-400">{predictionResult.confidenceScore}%</span>
                                                        </div>
                                                    </div>

                                                    {/* Detailed Forecasting Stats Cards */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                        <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-5 text-center">
                                                            <span className="text-[10px] text-slate-400 uppercase font-semibold block">Predicted Runs Range</span>
                                                            <h4 className="text-3xl font-cyber font-black text-white mt-1">{predictionResult.runsRange}</h4>
                                                            <p className="text-[10px] text-slate-500 mt-2">Weighted against {selectedPredictorPitch}</p>
                                                        </div>
                                                        <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-5 text-center">
                                                            <span className="text-[10px] text-slate-400 uppercase font-semibold block">Predicted Wickets Range</span>
                                                            <h4 className="text-3xl font-cyber font-black text-cyan-400 mt-1">{predictionResult.wicketsRange}</h4>
                                                            <p className="text-[10px] text-slate-500 mt-2">Adjusted for {selectedPredictorOpponent} matchups</p>
                                                        </div>
                                                        <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-5 text-center">
                                                            <span className="text-[10px] text-slate-400 uppercase font-semibold block">Predicted Strike Rate</span>
                                                            <h4 className="text-3xl font-cyber font-black text-emerald-400 mt-1">{predictionResult.strikeRateRange}</h4>
                                                            <p className="text-[10px] text-slate-500 mt-2 font-medium">Inning pacing index: Robust</p>
                                                        </div>
                                                    </div>

                                                    {/* Probability Outcomes & Key Vulnerabilities */}
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        {/* Probability Curves */}
                                                        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
                                                            <h4 className="font-cyber text-xs font-bold text-slate-300 tracking-wider uppercase mb-4">Probability Distributions</h4>
                                                            <div className="space-y-4">
                                                                {predictionResult.probabilityOutcomes.map((item, idx) => (
                                                                    <div key={idx} className="space-y-1.5">
                                                                        <div className="flex items-center justify-between text-xs">
                                                                            <span className="text-slate-300 font-semibold">{item.label}</span>
                                                                            <span className="font-cyber font-bold text-cyan-400">{item.prob}</span>
                                                                        </div>
                                                                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                                                            <div className="h-full bg-cyan-400 rounded-full" style={{ width: item.prob }}></div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        {/* Insights card */}
                                                        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
                                                            <div>
                                                                <h4 className="font-cyber text-xs font-bold text-slate-300 tracking-wider uppercase mb-3">AI Strategic Matchups</h4>
                                                                <ul className="space-y-3 text-xs text-slate-300 font-medium">
                                                                    <li className="flex items-start space-x-2">
                                                                        <span className="text-cyan-400 mt-0.5">•</span>
                                                                        <span>Dismissal risk against {predictionResult.matchCupRisk}.</span>
                                                                    </li>
                                                                    <li className="flex items-start space-x-2">
                                                                        <span className="text-emerald-400 mt-0.5">•</span>
                                                                        <span>Form factor: Batter averages <strong>{predictionResult.player.avg}</strong> in T20 cycles.</span>
                                                                    </li>
                                                                    <li className="flex items-start space-x-2">
                                                                        <span className="text-cyan-400 mt-0.5">•</span>
                                                                        <span>Venue characteristic: {predictionResult.venue.name} exhibits average score of {predictionResult.venue.avgScore} under {selectedPredictorWeather} condition.</span>
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                            {/* Form History Line Visualization */}
                                                            <div className="mt-4 pt-4 border-t border-slate-800">
                                                                <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-2 font-mono">Inn-by-Inn Historical Curve</span>
                                                                <div className="h-16 w-full bg-slate-950 rounded-lg p-2 border border-slate-800 flex items-center justify-center">
                                                                    <svg viewBox="0 0 300 60" className="w-full h-full overflow-visible">
                                                                        <path 
                                                                            d="M 10 40 L 80 15 L 150 50 L 220 10 L 290 35" 
                                                                            fill="none" 
                                                                            stroke="#06b6d4" 
                                                                            strokeWidth="2.5" 
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                        <circle cx="10" cy="40" r="3.5" fill="#030712" stroke="#06b6d4" strokeWidth="2" />
                                                                        <circle cx="80" cy="15" r="3.5" fill="#030712" stroke="#06b6d4" strokeWidth="2" />
                                                                        <circle cx="150" cy="50" r="3.5" fill="#030712" stroke="#06b6d4" strokeWidth="2" />
                                                                        <circle cx="220" cy="10" r="3.5" fill="#030712" stroke="#06b6d4" strokeWidth="2" />
                                                                        <circle cx="290" cy="35" r="3.5" fill="#030712" stroke="#06b6d4" strokeWidth="2" />
                                                                        <path d="M 280 10 L 295 10 L 295 25" fill="none" stroke="#10b981" strokeWidth="1.5" />
                                                                        <text x="250" y="20" fill="#10b981" fontSize="8" className="font-mono font-bold">UPWARD</text>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="bg-slate-900/30 border border-slate-800/80 rounded-2xl p-12 flex flex-col items-center justify-center text-center h-[500px]">
                                                    <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-3xl mb-4 font-sans">
                                                        🧠
                                                    </div>
                                                    <h3 className="font-cyber font-bold text-lg text-slate-300">Ready for Prediction</h3>
                                                    <p className="text-xs text-slate-500 mt-1 max-w-sm font-sans font-medium">Configure your matchup profile on the left sidebar and trigger the intelligence platform to simulate telemetry outcomes.</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* TAB 3: IPL LIVE MATCH SIMULATION */}
                            {currentTab === "liveInsights" && (
                                <div className="space-y-6 animate-fadeIn font-sans">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div>
                                            <h2 className="text-2xl font-cyber font-bold tracking-tight text-white">IPL LIVE MATCH SIMULATOR</h2>
                                            <p className="text-xs text-slate-400 font-sans font-medium">Step through over-by-over simulated analytics telemetry for today's matches and upcoming IPL 2026 knockouts.</p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <button 
                                                onClick={() => setIsSimPlaying(!isSimPlaying)}
                                                className={`px-4 py-2 rounded-xl text-xs font-cyber font-bold tracking-wider flex items-center space-x-2 transition-all ${isSimPlaying ? "bg-amber-500 text-slate-950 shadow-neon-glow" : "bg-cyan-500 text-slate-950 shadow-neon-glow hover:brightness-110"}`}>
                                                <span>{isSimPlaying ? "PAUSE SIMULATION" : "START SIMULATOR"}</span>
                                            </button>
                                            <button 
                                                onClick={() => resetSimulation(selectedSimMatchId)}
                                                className="px-4 py-2 rounded-xl text-xs font-cyber font-semibold border border-slate-800 hover:bg-slate-900 text-slate-400">
                                                RESET
                                            </button>
                                        </div>
                                    </div>

                                    {/* Selector of Match to Simulate */}
                                    <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4 font-sans">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-xs font-cyber font-bold text-slate-400 uppercase">Active IPL Match:</span>
                                            <select 
                                                value={selectedSimMatchId}
                                                onChange={(e) => {
                                                    setSelectedSimMatchId(e.target.value);
                                                }}
                                                className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-500 font-cyber font-semibold">
                                                <option value="match_69">🏟️ Today: Match 69 - MI vs RR (Wankhede)</option>
                                                <option value="match_70">🏟️ Today: Match 70 - KKR vs DC (Eden Gardens)</option>
                                                <option value="qualifier_1">🏆 May 26: Qualifier 1 - KKR vs RR (Dharamshala)</option>
                                                <option value="eliminator">🏆 May 27: Eliminator - SRH vs DC (Chandigarh)</option>
                                            </select>
                                        </div>
                                        <div className="text-xs text-slate-400 font-medium">
                                            Format: <strong className="text-slate-100 font-mono">T20 Overs Telemetry</strong>
                                        </div>
                                    </div>

                                    {/* Score Board Widget */}
                                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 relative overflow-hidden font-sans">
                                        <div className="absolute right-0 top-0 w-80 h-full bg-gradient-to-l from-indigo-500/5 to-transparent pointer-events-none"></div>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 items-center">
                                            {/* Score Column */}
                                            <div className="space-y-1 font-sans">
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold tracking-wider uppercase font-cyber">IPL 2026 ACTIVE</span>
                                                    <span className="text-slate-400 text-xs font-semibold">{IPL_MATCH_SIMULATIONS[selectedSimMatchId].tourney}</span>
                                                </div>
                                                <h3 className="text-4xl font-cyber font-black tracking-tight mt-1 text-white">
                                                    {IPL_MATCH_SIMULATIONS[selectedSimMatchId].overs[simIndex]?.score || "0/0"}
                                                </h3>
                                                <p className="text-xs text-slate-400 font-mono">Over: <span className="text-cyan-400 font-semibold">{IPL_MATCH_SIMULATIONS[selectedSimMatchId].overs[simIndex]?.over || 0}.0 / 20.0</span></p>
                                            </div>

                                            {/* Batter/Bowler status */}
                                            <div className="space-y-2 border-y md:border-y-0 md:border-x border-slate-800 py-4 md:py-0 md:px-6 font-sans">
                                                <div className="space-y-1">
                                                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Active Crease Telemetry:</span>
                                                    <p className="text-xs font-bold text-slate-200">{IPL_MATCH_SIMULATIONS[selectedSimMatchId].overs[simIndex]?.bats || "N/A"}</p>
                                                </div>
                                                <div className="space-y-1 pt-2">
                                                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Bowling Delivery Attack:</span>
                                                    <p className="text-xs text-slate-300 font-semibold">{IPL_MATCH_SIMULATIONS[selectedSimMatchId].overs[simIndex]?.bowl || "N/A"}</p>
                                                </div>
                                            </div>

                                            {/* Probabilities gauge */}
                                            <div className="flex flex-col justify-center font-sans">
                                                <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1 font-semibold">Live Win Probability</span>
                                                <div className="flex items-center justify-between text-xs font-semibold mb-1">
                                                    <span className="text-cyan-400">{IPL_MATCH_SIMULATIONS[selectedSimMatchId].teams.teamA}: {IPL_MATCH_SIMULATIONS[selectedSimMatchId].overs[simIndex]?.probA || 50}%</span>
                                                    <span className="text-slate-400">{IPL_MATCH_SIMULATIONS[selectedSimMatchId].teams.teamB}: {100 - (IPL_MATCH_SIMULATIONS[selectedSimMatchId].overs[simIndex]?.probA || 50)}%</span>
                                                </div>
                                                <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden flex">
                                                    <div className="h-full bg-cyan-400 transition-all duration-300" style={{ width: `${IPL_MATCH_SIMULATIONS[selectedSimMatchId].overs[simIndex]?.probA || 50}%` }}></div>
                                                    <div className="h-full bg-slate-600 transition-all duration-300" style={{ width: `${100 - (IPL_MATCH_SIMULATIONS[selectedSimMatchId].overs[simIndex]?.probA || 50)}%` }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Win Probability Time Series and Ticker Log */}
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-sans">
                                        
                                        {/* Win Probability Chart */}
                                        <div className="lg:col-span-2 bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
                                            <h4 className="font-cyber text-xs font-bold text-slate-300 tracking-wider uppercase mb-4">Win Probability Inning-by-Inning Telemetry</h4>
                                            
                                            <div className="h-64 w-full bg-slate-950 rounded-2xl p-4 border border-slate-800 relative flex items-end">
                                                {/* Live SVG Graph */}
                                                <svg viewBox="0 0 500 200" className="w-full h-full overflow-visible">
                                                    <line x1="0" y1="50" x2="500" y2="50" stroke="#1e293b" strokeDasharray="3,3" />
                                                    <line x1="0" y1="100" x2="500" y2="100" stroke="#1e293b" strokeDasharray="3,3" />
                                                    <line x1="0" y1="150" x2="500" y2="150" stroke="#1e293b" strokeDasharray="3,3" />
                                                    <text x="5" y="45" fill="#64748b" fontSize="8" className="font-mono">75% (A)</text>
                                                    <text x="5" y="95" fill="#64748b" fontSize="8" className="font-mono">50%</text>
                                                    <text x="5" y="145" fill="#64748b" fontSize="8" className="font-mono">25% (A)</text>

                                                    {simHistory.length > 1 && (
                                                        <path 
                                                            d={simHistory.map((pt, idx) => {
                                                                const x = (idx / (IPL_MATCH_SIMULATIONS[selectedSimMatchId].overs.length - 1)) * 500;
                                                                const y = 200 - (pt.probA / 100) * 200;
                                                                return `${idx === 0 ? 'M' : 'L'} ${x} ${y}`;
                                                            }).join(' ')}
                                                            fill="none"
                                                            stroke="url(#chart-glow)"
                                                            strokeWidth="3.5"
                                                            strokeLinecap="round"
                                                            className="transition-all duration-300"
                                                        />
                                                    )}

                                                    {simHistory.map((pt, idx) => {
                                                        const x = (idx / (IPL_MATCH_SIMULATIONS[selectedSimMatchId].overs.length - 1)) * 500;
                                                        const y = 200 - (pt.probA / 100) * 200;
                                                        return (
                                                            <circle 
                                                                key={idx} 
                                                                cx={x} 
                                                                cy={y} 
                                                                r="4" 
                                                                fill="#030712" 
                                                                stroke="#06b6d4" 
                                                                strokeWidth="2" 
                                                            />
                                                        );
                                                    })}

                                                    <defs>
                                                        <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="0%" stopColor="#06b6d4" />
                                                            <stop offset="100%" stopColor="#10b981" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="flex justify-between items-center mt-3 text-[10px] font-mono text-slate-500">
                                                <span>Over 1.0</span>
                                                <span>Over 10.0</span>
                                                <span>Over 20.0</span>
                                            </div>
                                        </div>

                                        {/* Commentary Over Ticker */}
                                        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between h-[340px]">
                                            <div>
                                                <h4 className="font-cyber text-xs font-bold text-slate-300 tracking-wider uppercase mb-3 font-sans">Ball-by-Ball Live Commentary</h4>
                                                
                                                <div className="space-y-3 h-56 overflow-y-auto pr-2">
                                                    {simHistory.slice(0).reverse().map((item, idx) => (
                                                        <div key={idx} className="p-3 bg-slate-950/50 rounded-xl border border-slate-850 flex flex-col space-y-1 animate-fadeIn">
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-[10px] font-bold text-cyan-400 font-mono">OVER {item.over}.0</span>
                                                                <span className="text-[10px] text-slate-500 font-mono">{item.score}</span>
                                                            </div>
                                                            <p className="text-xs text-slate-300 leading-relaxed font-sans font-medium">{item.commentary}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="text-[9px] text-slate-500 font-mono text-center pt-2 border-t border-slate-800">
                                                Commentary synced from AI Core Matchup engine
                                            </div>
                                        </div>

                                    </div>

                                    {/* Upcoming IPL 2026 Playoff Matches Timeline */}
                                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4 font-sans">
                                        <h3 className="font-cyber text-xs font-bold text-amber-400 tracking-wider uppercase border-b border-slate-800 pb-2">Upcoming IPL 2026 Playoffs Timeline</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                            {IPL_UPCOMING_FIXTURES.map((fix) => (
                                                <div key={fix.id} className="p-4 bg-slate-950 rounded-2xl border border-slate-850 flex flex-col justify-between space-y-2 hover:border-amber-500/20 cursor-pointer transition-all" onClick={() => {
                                                    if (fix.id === "q1" || fix.id === "elim") {
                                                        setSelectedSimMatchId(fix.id === "q1" ? "qualifier_1" : "eliminator");
                                                    } else {
                                                        alert(`Matchup details for ${fix.match} will load dynamically as soon as the respective Qualifiers and Eliminator conclude!`);
                                                    }
                                                }}>
                                                    <div>
                                                        <span className="text-[10px] text-slate-500 font-mono">{fix.date}</span>
                                                        <h4 className="font-cyber text-xs font-bold text-slate-200 mt-1 font-sans">{fix.match}</h4>
                                                    </div>
                                                    <div className="text-[10px] text-slate-400">
                                                        <p className="truncate font-semibold">{fix.venue}</p>
                                                        <p className="font-mono text-cyan-400 mt-1">{fix.time}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* TAB 4: SHOT TELEMETRY & DYNAMIC SKELETAL SIMULATOR */}
                            {currentTab === "shotTelemetry" && (
                                <div className="space-y-6 animate-fadeIn font-sans">
                                    <div>
                                        <h2 className="text-2xl font-cyber font-bold tracking-tight text-white">SKELETAL SHOT TELEMETRY</h2>
                                        <p className="text-xs text-slate-400 font-sans font-medium">Analyze striking heatmaps or configure the joint angle coordinates directly below to see how posture affects bat timing and catching risk.</p>
                                    </div>

                                    {/* Selector Row */}
                                    <div className="flex border-b border-slate-800 space-x-4">
                                        <button 
                                            onClick={() => setSelectedShotType("Cover Drive")}
                                            className={`pb-3 text-sm font-cyber font-semibold uppercase tracking-wider transition-all border-b-2 ${selectedShotType === "Cover Drive" ? "border-cyan-500 text-cyan-400" : "border-transparent text-slate-400 hover:text-white"}`}>
                                            Cover Drive
                                        </button>
                                        <button 
                                            onClick={() => setSelectedShotType("Pull Shot")}
                                            className={`pb-3 text-sm font-cyber font-semibold uppercase tracking-wider transition-all border-b-2 ${selectedShotType === "Pull Shot" ? "border-cyan-500 text-cyan-400" : "border-transparent text-slate-400 hover:text-white"}`}>
                                            Pull Shot
                                        </button>
                                        <button 
                                            onClick={() => setSelectedShotType("Sweep Shot")}
                                            className={`pb-3 text-sm font-cyber font-semibold uppercase tracking-wider transition-all border-b-2 ${selectedShotType === "Sweep Shot" ? "border-cyan-500 text-cyan-400" : "border-transparent text-slate-400 hover:text-white"}`}>
                                            Sweep Shot
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        
                                        {/* Panel A: Interactive Wagon Wheel Ground */}
                                        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col items-center">
                                            <div className="w-full flex justify-between items-center mb-4">
                                                <h4 className="font-cyber text-xs font-bold text-slate-300 tracking-wider uppercase">Ground Striking Heatmap</h4>
                                                <span className="text-[10px] text-cyan-400 font-mono font-bold">Hover over sectors</span>
                                            </div>

                                            <div className="relative w-80 h-80 bg-slate-950 rounded-full border border-slate-800/80 p-2 flex items-center justify-center overflow-hidden">
                                                <div className="absolute inset-4 rounded-full border border-dashed border-emerald-500/20"></div>
                                                <div className="absolute inset-16 rounded-full border border-emerald-500/10"></div>
                                                
                                                <div className="absolute w-6 h-16 bg-amber-950/30 border border-amber-800/50 rounded flex items-center justify-center rotate-12 z-10">
                                                    <div className="w-0.5 h-12 bg-amber-400/20"></div>
                                                </div>

                                                <svg className="absolute inset-0 w-full h-full rotate-12 pointer-events-none" viewBox="0 0 100 100">
                                                    <line x1="50" y1="50" x2="50" y2="0" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="0.5" />
                                                    <line x1="50" y1="50" x2="100" y2="50" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="0.5" />
                                                    <line x1="50" y1="50" x2="0" y2="50" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="0.5" />
                                                    <line x1="50" y1="50" x2="50" y2="100" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="0.5" />
                                                    <line x1="50" y1="50" x2="15" y2="15" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="0.5" />
                                                    <line x1="50" y1="50" x2="85" y2="15" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="0.5" />
                                                    <line x1="50" y1="50" x2="15" y2="85" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="0.5" />
                                                    <line x1="50" y1="50" x2="85" y2="85" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="0.5" />
                                                </svg>

                                                <div 
                                                    onMouseEnter={() => setHoveredWheelZone({ name: "Cover", percentage: "34%", runs: 82, sr: 165 })}
                                                    onMouseLeave={() => setHoveredWheelZone(null)}
                                                    className={`absolute top-10 left-10 w-24 h-24 rounded-full border border-cyan-500/25 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-cyan-500/10 ${selectedShotType === "Cover Drive" ? "bg-cyan-500/15 scale-105 shadow-neon-glow border-cyan-400" : ""}`}>
                                                    <span className="text-[9px] font-cyber text-cyan-400">Cover</span>
                                                </div>

                                                <div 
                                                    onMouseEnter={() => setHoveredWheelZone({ name: "Mid-Wicket", percentage: "45%", runs: 112, sr: 154 })}
                                                    onMouseLeave={() => setHoveredWheelZone(null)}
                                                    className={`absolute top-12 right-12 w-24 h-24 rounded-full border border-emerald-500/25 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-emerald-500/10 ${selectedShotType === "Pull Shot" ? "bg-emerald-500/15 scale-105 shadow-neon-green border-emerald-400" : ""}`}>
                                                    <span className="text-[9px] font-cyber text-emerald-400">Mid-Wicket</span>
                                                </div>

                                                <div 
                                                    onMouseEnter={() => setHoveredWheelZone({ name: "Fine Leg", percentage: "28%", runs: 64, sr: 142 })}
                                                    onMouseLeave={() => setHoveredWheelZone(null)}
                                                    className={`absolute bottom-10 right-10 w-24 h-24 rounded-full border border-amber-500/25 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-amber-500/10 ${selectedShotType === "Sweep Shot" ? "bg-amber-500/15 scale-105 border-amber-400" : ""}`}>
                                                    <span className="text-[9px] font-cyber text-amber-400">Fine Leg</span>
                                                </div>

                                                <div 
                                                    onMouseEnter={() => setHoveredWheelZone({ name: "Long-on", percentage: "22%", runs: 58, sr: 135 })}
                                                    onMouseLeave={() => setHoveredWheelZone(null)}
                                                    className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border border-slate-800/80 flex items-center justify-center cursor-pointer hover:bg-slate-800/30 transition-all">
                                                    <span className="text-[9px] font-cyber text-slate-500 font-bold">Long-on</span>
                                                </div>
                                            </div>

                                            <div className="w-full mt-6 bg-slate-950 border border-slate-850 p-4 rounded-xl min-h-24">
                                                {hoveredWheelZone ? (
                                                    <div className="grid grid-cols-2 gap-2 text-xs font-sans">
                                                        <div>
                                                            <span className="text-slate-500 block">Sway Zone</span>
                                                            <span className="font-bold text-slate-200">{hoveredWheelZone.name}</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-slate-500 block">Strike Rate</span>
                                                            <span className="font-bold text-cyan-400">{hoveredWheelZone.sr}</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-slate-500 block">Zone Distribution</span>
                                                            <span className="font-bold text-white">{hoveredWheelZone.percentage}</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-slate-500 block">Scored Runs</span>
                                                            <span className="font-bold text-emerald-400">{hoveredWheelZone.runs} runs</span>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center justify-center text-xs text-slate-500 text-center h-14 font-sans">
                                                        Hover over highlighted regions of the ground pitch to view real-time boundary distribution metrics.
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Overhauled Computer Vision Pose rig with real-time sliders! */}
                                        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4">
                                            <div className="flex justify-between items-center">
                                                <h4 className="font-cyber text-xs font-bold text-slate-300 tracking-wider uppercase">AI Skeletal Joint Modeler</h4>
                                                
                                                {/* YOLOv8 bounding box toggler */}
                                                <button 
                                                    onClick={() => setYoloBboxEnabled(!yoloBboxEnabled)}
                                                    className={`px-2 py-1 border rounded text-[10px] font-cyber font-bold tracking-wider transition-all ${yoloBboxEnabled ? "bg-cyan-500/10 border-cyan-400 text-cyan-400 shadow-neon-glow" : "border-slate-800 text-slate-500"}`}>
                                                    YOLOv8 BBOX: {yoloBboxEnabled ? "ON" : "OFF"}
                                                </button>
                                            </div>

                                            {/* Beautiful camera tracker canvas rig */}
                                            <div className="w-full h-64 bg-slate-950 rounded-2xl border border-slate-850 flex items-center justify-center relative p-4 overflow-hidden">
                                                
                                                {/* Simulated Camera corner marks */}
                                                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-slate-700"></div>
                                                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-slate-700"></div>
                                                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-slate-700"></div>
                                                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-slate-700"></div>

                                                {/* Camera Info Panel */}
                                                <div className="absolute top-2 left-8 text-[9px] font-mono text-emerald-400 tracking-widest flex items-center space-x-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                                    <span>REC [60 FPS] • YOLOv8-POSE ACTIVE</span>
                                                </div>

                                                {/* Simulated YOLOv8 detection bounding box */}
                                                {yoloBboxEnabled && (
                                                    <div className="absolute top-12 left-10 w-44 h-48 border-2 border-cyan-400 border-dashed rounded-lg opacity-45 flex items-start p-1 pointer-events-none">
                                                        <span className="text-[8px] font-cyber bg-cyan-400 text-slate-950 px-1 py-0.5 rounded font-black tracking-widest">BATSMAN [CONF 0.98]</span>
                                                    </div>
                                                )}

                                                <svg viewBox="0 0 200 150" className="w-full h-full">
                                                    {/* Background coordinates grid */}
                                                    <g opacity="0.05">
                                                        <line x1="10" y1="10" x2="190" y2="10" stroke="#fff" strokeWidth="0.5" />
                                                        <line x1="10" y1="40" x2="190" y2="40" stroke="#fff" strokeWidth="0.5" />
                                                        <line x1="10" y1="70" x2="190" y2="70" stroke="#fff" strokeWidth="0.5" />
                                                        <line x1="10" y1="100" x2="190" y2="100" stroke="#fff" strokeWidth="0.5" />
                                                    </g>

                                                    {/* Reactive dynamic joint drawing */}
                                                    <g>
                                                        {/* Bat trace neon curve */}
                                                        <path d="M 60 20 Q 90 70 120 110" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.4" />
                                                        
                                                        {/* Torso spine (Slightly bends with shoulder lean) */}
                                                        <line x1="100" y1="40" x2={90 + (sliderShoulder * 0.15)} y2="75" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                                                        
                                                        {/* Front Arm (Responding dynamically to sliderElbow!) */}
                                                        <line x1="100" y1="40" x2={80 - (sliderElbow - 140) * 0.25} y2={55 + (sliderElbow - 140) * 0.15} stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                                                        <line x1={80 - (sliderElbow - 140) * 0.25} y1={55 + (sliderElbow - 140) * 0.15} x2="95" y2="85" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                                                        
                                                        {/* Dynamic Bat angle representation */}
                                                        <line x1="95" y1="85" x2={95 + (sliderBatAngle * 0.45)} y2={85 + (sliderBatAngle * 0.55)} stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
                                                        <line x1={95 + (sliderBatAngle * 0.45)} y1={85 + (sliderBatAngle * 0.55)} x2={95 + (sliderBatAngle * 0.55)} y2={85 + (sliderBatAngle * 0.65)} stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />

                                                        {/* Legs (Knee lunge bending!) */}
                                                        <line x1={90 + (sliderShoulder * 0.15)} y1="75" x2="85" y2="110" stroke="#10b981" strokeWidth="2.5" />
                                                        <line x1="85" y1="110" x2="75" y2="135" stroke="#10b981" strokeWidth="2.5" />
                                                        <line x1={90 + (sliderShoulder * 0.15)} y1="75" x2={110 + (sliderKnee - 120) * 0.35} y2="105" stroke="#10b981" strokeWidth="2.5" />
                                                        <line x1={110 + (sliderKnee - 120) * 0.35} y1="105" x2="135" y2="135" stroke="#10b981" strokeWidth="2.5" />

                                                        {/* Dynamic skeletal coordinate points */}
                                                        <circle cx={80 - (sliderElbow - 140) * 0.25} cy={55 + (sliderElbow - 140) * 0.15} r="4" fill="#06b6d4" className="cursor-pointer" onClick={() => setCvPoseActiveNode("Front Elbow")} />
                                                        <circle cx={110 + (sliderKnee - 120) * 0.35} cy="105" r="4" fill="#06b6d4" className="cursor-pointer" onClick={() => setCvPoseActiveNode("Front Knee")} />
                                                        <circle cx={95 + (sliderBatAngle * 0.45)} cy={85 + (sliderBatAngle * 0.55)} r="4" fill="#f59e0b" className="cursor-pointer" onClick={() => setCvPoseActiveNode("Bat Arc Angle")} />
                                                        <circle cx="100" cy="40" r="4" fill="#06b6d4" className="cursor-pointer" onClick={() => setCvPoseActiveNode("Shoulder Lean")} />
                                                        
                                                        {/* Head */}
                                                        <circle cx={101 + (sliderShoulder * 0.1)} cy="22" r="7.5" fill="#10b981" />
                                                    </g>
                                                </svg>
                                            </div>

                                            {/* Interactive Sliders Rig */}
                                            <div className="space-y-3 bg-slate-950 p-4 rounded-xl border border-slate-850">
                                                <span className="text-[10px] text-slate-500 font-mono block uppercase">Configure Joint Coefficients</span>
                                                <div className="grid grid-cols-2 gap-3 text-xs">
                                                    
                                                    {/* Slider 1: Elbow */}
                                                    <div className="space-y-1">
                                                        <div className="flex justify-between">
                                                            <span className="text-slate-400">Elbow Flexion</span>
                                                            <span className="font-bold text-cyan-400 font-mono">{sliderElbow}°</span>
                                                        </div>
                                                        <input 
                                                            type="range" min="90" max="180" value={sliderElbow}
                                                            onChange={(e) => {
                                                                setSliderElbow(parseInt(e.target.value));
                                                                setCvPoseActiveNode("Front Elbow");
                                                            }}
                                                            className="w-full accent-cyan-400 cursor-pointer h-1 bg-slate-800 rounded-lg appearance-none"
                                                        />
                                                    </div>

                                                    {/* Slider 2: Knee */}
                                                    <div className="space-y-1">
                                                        <div className="flex justify-between">
                                                            <span className="text-slate-400">Knee Lunge</span>
                                                            <span className="font-bold text-cyan-400 font-mono">{sliderKnee}°</span>
                                                        </div>
                                                        <input 
                                                            type="range" min="80" max="170" value={sliderKnee}
                                                            onChange={(e) => {
                                                                setSliderKnee(parseInt(e.target.value));
                                                                setCvPoseActiveNode("Front Knee");
                                                            }}
                                                            className="w-full accent-cyan-400 cursor-pointer h-1 bg-slate-800 rounded-lg appearance-none"
                                                        />
                                                    </div>

                                                    {/* Slider 3: Bat Angle */}
                                                    <div className="space-y-1">
                                                        <div className="flex justify-between">
                                                            <span className="text-slate-400">Bat Face</span>
                                                            <span className="font-bold text-amber-500 font-mono">{sliderBatAngle}°</span>
                                                        </div>
                                                        <input 
                                                            type="range" min="10" max="90" value={sliderBatAngle}
                                                            onChange={(e) => {
                                                                setSliderBatAngle(parseInt(e.target.value));
                                                                setCvPoseActiveNode("Bat Arc Angle");
                                                            }}
                                                            className="w-full accent-amber-500 cursor-pointer h-1 bg-slate-800 rounded-lg appearance-none"
                                                        />
                                                    </div>

                                                    {/* Slider 4: Shoulder */}
                                                    <div className="space-y-1">
                                                        <div className="flex justify-between">
                                                            <span className="text-slate-400">Shoulder Lean</span>
                                                            <span className="font-bold text-cyan-400 font-mono">{sliderShoulder}°</span>
                                                        </div>
                                                        <input 
                                                            type="range" min="-30" max="50" value={sliderShoulder}
                                                            onChange={(e) => {
                                                                setSliderShoulder(parseInt(e.target.value));
                                                                setCvPoseActiveNode("Shoulder Lean");
                                                            }}
                                                            className="w-full accent-cyan-400 cursor-pointer h-1 bg-slate-800 rounded-lg appearance-none"
                                                        />
                                                    </div>

                                                </div>
                                            </div>

                                            {/* AI Feedback Overlay rig */}
                                            <div className="p-4 bg-slate-950 border border-slate-850 rounded-xl space-y-2">
                                                <div className="flex justify-between items-center border-b border-slate-850 pb-2">
                                                    <span className="text-xs font-cyber font-bold text-slate-300">Stance Rating: <strong className="text-cyan-400">{cvAnalysis.status}</strong></span>
                                                    <span className="text-xs font-cyber text-emerald-400 font-bold">Accuracy: {cvAnalysis.qualityScore}%</span>
                                                </div>
                                                <div className="text-xs text-slate-400 leading-relaxed space-y-1">
                                                    <p className="font-medium text-slate-300">{cvAnalysis.verbalFeedback}</p>
                                                    <div className="flex justify-between pt-1">
                                                        <span>Calculated Catching Risk:</span>
                                                        <span className={`font-bold font-mono ${cvAnalysis.catchingRisk > 40 ? "text-rose-400" : "text-emerald-400"}`}>{cvAnalysis.catchingRisk}%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )}

                            {/* TAB 5: FANTASY TEAM GENERATOR */}
                            {currentTab === "fantasyGenerator" && (
                                <div className="space-y-6 animate-fadeIn font-sans">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div>
                                            <h2 className="text-2xl font-cyber font-bold tracking-tight text-white">AI DREAM 11 FANTASY PLATFORM</h2>
                                            <p className="text-xs text-slate-400">Auto-generate maximum yield cricket squads weighted against tactical tournament parameters.</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                        {/* Parameters */}
                                        <div className="lg:col-span-1 bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-5 h-fit">
                                            <h3 className="font-cyber text-xs font-bold text-slate-300 tracking-wider uppercase border-b border-slate-800 pb-3">Synergy Settings</h3>
                                            
                                            <div className="space-y-1.5">
                                                <label className="text-xs text-slate-400 font-medium font-sans">Squad Strategy Focus</label>
                                                <select 
                                                    value={fantasyStrategy}
                                                    onChange={(e) => setFantasyStrategy(e.target.value)}
                                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500">
                                                    <option value="Optimal (Safe)">Optimal Balanced (Safe)</option>
                                                    <option value="Pace Dominant">Pace Heavy (For Seamer Pitches)</option>
                                                    <option value="Gamble (High-risk)">High Risk / High Return (Differential Pick)</option>
                                                    <option value="Spin Heavy">Spin heavy / Death-over specialized</option>
                                                </select>
                                            </div>

                                            <div className="p-4 bg-slate-950 rounded-xl border border-slate-850 space-y-2 text-xs text-slate-400 font-sans">
                                                <div className="flex justify-between">
                                                    <span>Player Limit:</span>
                                                    <span className="text-white font-mono font-bold">11 Players</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Credit Cap:</span>
                                                    <span className="text-white font-mono font-bold">100 Credits Max</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Team Distribution:</span>
                                                    <span className="text-white font-mono font-bold">Max 7 per country</span>
                                                </div>
                                            </div>

                                            <button 
                                                onClick={autoGenerateFantasySquad}
                                                disabled={isGeneratingFantasy}
                                                className="w-full py-4 rounded-xl font-cyber font-bold text-sm tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-neon-glow hover:brightness-110 transition-all">
                                                {isGeneratingFantasy ? "ANALYZING PLAYERS..." : "AUTO-GENERATE AI SQUAD"}
                                            </button>
                                        </div>

                                        {/* Resulting Squad */}
                                        <div className="lg:col-span-2 space-y-4">
                                            {isGeneratingFantasy ? (
                                                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-12 flex flex-col items-center justify-center text-center h-[400px]">
                                                    <div className="w-12 h-12 rounded-full border-4 border-emerald-500/10 border-t-emerald-500 animate-spin mb-4"></div>
                                                    <h3 className="font-cyber font-bold text-slate-200">Evaluating Synergy & Credits</h3>
                                                    <p className="text-xs text-slate-500 mt-1 max-w-xs font-sans font-medium">Selecting optimal players based on recent performance ratios...</p>
                                                </div>
                                            ) : fantasySquad ? (
                                                <div className="space-y-4 animate-fadeIn">
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
                                                            <div>
                                                                <span className="text-[10px] text-slate-500 uppercase block font-sans">Total Credits Used</span>
                                                                <span className="text-xl font-cyber font-bold text-white">{fantasySquad.totalCost} / 100</span>
                                                            </div>
                                                            <span className="text-xl font-sans">💳</span>
                                                        </div>
                                                        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
                                                            <div>
                                                                <span className="text-[10px] text-slate-500 uppercase block font-sans">Projected Points</span>
                                                                <span className="text-xl font-cyber font-bold text-emerald-400">{fantasySquad.projectedTotal} pts</span>
                                                            </div>
                                                            <span className="text-xl font-sans">🔥</span>
                                                        </div>
                                                        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
                                                            <div>
                                                                <span className="text-[10px] text-slate-500 uppercase block font-sans">Confidence Match</span>
                                                                <span className="text-xl font-cyber font-bold text-cyan-400">{fantasySquad.confidenceScore}%</span>
                                                            </div>
                                                            <span className="text-xl font-sans">🎯</span>
                                                        </div>
                                                    </div>

                                                    {/* Squad Table */}
                                                    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden font-sans">
                                                        <table className="w-full text-left text-xs text-slate-300">
                                                            <thead className="bg-slate-900 border-b border-slate-800 text-[10px] text-slate-400 uppercase font-cyber tracking-wider">
                                                                <tr>
                                                                    <th className="px-4 py-3">Player Info</th>
                                                                    <th className="px-4 py-3">Country</th>
                                                                    <th className="px-4 py-3 text-center">Designation</th>
                                                                    <th className="px-4 py-3 text-right">Cost Credits</th>
                                                                    <th className="px-4 py-3 text-right">Proj Points</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-slate-850">
                                                                {fantasySquad.players.map((p, idx) => (
                                                                    <tr key={p.id} className="hover:bg-slate-900/40 transition-all">
                                                                        <td className="px-4 py-3.5 flex items-center space-x-3">
                                                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[10px] ${p.avatarColor} text-white`}>
                                                                                {p.name.split(' ').map(n=>n[0]).join('')}
                                                                            </div>
                                                                            <div>
                                                                                <span className="font-semibold block">{p.name}</span>
                                                                                <span className="text-[10px] text-slate-500 font-sans font-medium">{p.role}</span>
                                                                            </div>
                                                                        </td>
                                                                        <td className="px-4 py-3.5 font-sans">
                                                                            {p.flag} {p.team}
                                                                        </td>
                                                                        <td className="px-4 py-3.5 text-center">
                                                                            {p.isCaptain ? (
                                                                                <span className="text-[9px] font-cyber font-bold text-slate-950 bg-amber-400 px-2 py-0.5 rounded-full shadow-neon-glow">CAP (2x)</span>
                                                                            ) : p.isViceCaptain ? (
                                                                                <span className="text-[9px] font-cyber font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">V-CAP (1.5x)</span>
                                                                            ) : (
                                                                                <span className="text-slate-500 text-[10px] font-sans">-</span>
                                                                            )}
                                                                        </td>
                                                                        <td className="px-4 py-3.5 text-right font-mono font-bold text-slate-200">
                                                                            {p.cost}
                                                                        </td>
                                                                        <td className="px-4 py-3.5 text-right font-mono font-bold text-emerald-400">
                                                                            {p.projectedPoints}
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-12 flex flex-col items-center justify-center text-center h-[400px]">
                                                    <div className="w-14 h-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-3xl mb-4">
                                                        🛡️
                                                    </div>
                                                    <h3 className="font-cyber font-bold text-slate-300">Squad Generation Ready</h3>
                                                    <p className="text-xs text-slate-500 mt-1 max-w-sm font-sans font-medium">Tap the generation prompt on the settings panel to formulate an optimized AI fantasy team configuration.</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* TAB 6: SPORTS ANALYST PORTFOLIO */}
                            {currentTab === "portfolioHub" && (
                                <div className="space-y-8 animate-fadeIn">
                                    {/* Personal Profile Header */}
                                    <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-indigo-950/40 border border-indigo-500/10 p-8 rounded-3xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="flex items-center space-x-5">
                                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-500 p-0.5 shadow-neon-glow shrink-0">
                                                <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center text-3xl">
                                                    👨‍💻
                                                </div>
                                            </div>
                                            <div>
                                                <h2 className="text-2xl md:text-3xl font-cyber font-extrabold text-white tracking-wide font-sans">ARJUN SHARMA</h2>
                                                <p className="text-sm text-cyan-400 font-medium font-sans">Senior Lead Sports Data Scientist & Analyst</p>
                                                <p className="text-xs text-slate-400 mt-1 max-w-lg leading-relaxed font-sans">
                                                    Specializing in high-performance predictive analytics, deep-learning computer vision systems (YOLOv8/MediaPipe) for player biomechanics, and time-series match simulations.
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-2 max-w-xs justify-start md:justify-end font-sans">
                                            {["Python", "PyTorch", "OpenCV", "XGBoost", "React", "SQL"].map((tag, i) => (
                                                <span key={i} className="text-[10px] font-mono font-bold bg-slate-900 border border-slate-800 text-slate-300 px-2 py-1 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Interactive Portfolio Projects Showcase */}
                                    <div className="space-y-6">
                                        <h3 className="font-cyber text-lg font-bold text-slate-200 tracking-wider">PROJECT PORTFOLIO</h3>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
                                            {PORTFOLIO_PROJECTS.map((proj, idx) => (
                                                <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-cyan-500/20 transition-all">
                                                    <div>
                                                        <span className="text-[9px] font-cyber text-cyan-400 uppercase tracking-widest block mb-2">{proj.tag}</span>
                                                        <h4 className="font-cyber font-bold text-slate-200 text-sm mb-2 font-sans">{proj.title}</h4>
                                                        <p className="text-slate-400 text-xs leading-relaxed mb-4 font-sans font-medium">{proj.desc}</p>
                                                    </div>
                                                    <div className="flex flex-wrap gap-1 mt-4 pt-3 border-t border-slate-850 font-sans">
                                                        {proj.tech.map((t, i) => (
                                                            <span key={i} className="text-[9px] font-mono text-slate-500 bg-slate-950 px-1.5 py-0.5 rounded">{t}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Dual Segment: Interactive Valuation Model & Contact Hiring Box */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-sans">
                                        
                                        {/* Segment A: Live Interactive Calculator Model */}
                                        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 space-y-5">
                                            <div>
                                                <h3 className="font-cyber text-sm font-bold text-slate-200 tracking-wider uppercase flex items-center">
                                                    <span className="text-xl mr-2">💰</span>
                                                    <span>IPL Auction Valuation Optimizer</span>
                                                </h3>
                                                <p className="text-xs text-slate-400 mt-1 font-sans font-medium">
                                                    Adjust simulated stats using the regression sliders below to watch the predicted bid valuation compute in real-time.
                                                </p>
                                            </div>

                                            <div className="space-y-4 font-sans">
                                                <div className="space-y-1">
                                                    <div className="flex justify-between text-xs">
                                                        <span className="text-slate-400 font-sans">Strike Rate (Innings Pace)</span>
                                                        <span className="font-bold text-cyan-400 font-sans">{portStrikeRate} SR</span>
                                                    </div>
                                                    <input 
                                                        type="range" 
                                                        min="110" 
                                                        max="200" 
                                                        value={portStrikeRate}
                                                        onChange={(e) => setPortStrikeRate(parseInt(e.target.value))}
                                                        className="w-full h-1 bg-slate-850 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                                                    />
                                                </div>

                                                <div className="space-y-1">
                                                    <div className="flex justify-between text-xs">
                                                        <span className="text-slate-400 font-sans font-medium">Economy Rate (Bowlers Index)</span>
                                                        <span className="font-bold text-cyan-400 font-sans">{portEconomy} econ</span>
                                                    </div>
                                                    <input 
                                                        type="range" 
                                                        min="5.5" 
                                                        max="11.5" 
                                                        step="0.1" 
                                                        value={portEconomy}
                                                        onChange={(e) => setPortEconomy(parseFloat(e.target.value))}
                                                        className="w-full h-1 bg-slate-850 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                                                    />
                                                </div>

                                                <div className="space-y-1">
                                                    <div className="flex justify-between text-xs">
                                                        <span className="text-slate-400 font-sans font-medium">Innings Played (Experience)</span>
                                                        <span className="font-bold text-cyan-400 font-sans">{portMatches} Match innings</span>
                                                    </div>
                                                    <input 
                                                        type="range" 
                                                        min="5" 
                                                        max="100" 
                                                        value={portMatches}
                                                        onChange={(e) => setPortMatches(parseInt(e.target.value))}
                                                        className="w-full h-1 bg-slate-850 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                                                    />
                                                </div>

                                                <div className="flex items-center justify-between text-xs py-2 font-sans">
                                                    <span className="text-slate-400">International Matches Capped Status</span>
                                                    <button 
                                                        onClick={() => setPortIsInternational(!portIsInternational)}
                                                        className={`px-3 py-1 rounded-lg font-cyber font-bold tracking-wider text-[10px] transition-all ${portIsInternational ? "bg-cyan-500 text-slate-950 shadow-neon-glow" : "bg-slate-850 text-slate-400 border border-slate-800"}`}>
                                                        {portIsInternational ? "INTERNATIONAL CAP" : "DOMESTIC SQUAD"}
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850 flex items-center justify-between font-sans">
                                                <div>
                                                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-sans">PREDICTED AUCTION BID VALUE</span>
                                                    <span className="text-3xl font-cyber font-black text-emerald-400 mt-1">₹{portPredictedBid} Crore</span>
                                                </div>
                                                <div className="text-[9px] text-slate-500 font-mono text-right max-w-[120px]">
                                                    Weighted XGBoost valuation optimization heuristic.
                                                </div>
                                            </div>
                                        </div>

                                        {/* Segment B: Elegant Hire/Collaboration Form */}
                                        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-cyber text-sm font-bold text-slate-200 tracking-wider uppercase flex items-center">
                                                    <span className="text-xl mr-2">✉️</span>
                                                    <span>Connect & Collaborate</span>
                                                </h3>
                                                <p className="text-xs text-slate-400 mt-1 mb-4 font-sans font-medium">
                                                    Interested in embedding sports intelligence overlays inside your media broadcast or franchise scouting systems? Get in touch!
                                                </p>

                                                {contactSubmitted ? (
                                                    <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-6 rounded-2xl text-center space-y-3 my-4 animate-fadeIn">
                                                        <span className="text-3xl font-sans">✅</span>
                                                        <h4 className="font-cyber font-bold">Inquiry Sent Successfully!</h4>
                                                        <p className="text-xs text-emerald-300 font-sans">Arjun Sharma will review your analytics proposal and respond within 24 working hours.</p>
                                                    </div>
                                                ) : (
                                                    <form onSubmit={handleContactSubmit} className="space-y-3 font-sans font-medium">
                                                        <div className="grid grid-cols-2 gap-3">
                                                            <input 
                                                                type="text" 
                                                                required
                                                                placeholder="Your Name" 
                                                                value={contactForm.name}
                                                                onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                                                                className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                                            />
                                                            <input 
                                                                type="email" 
                                                                required
                                                                placeholder="Email Address" 
                                                                value={contactForm.email}
                                                                onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                                                                className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                                            />
                                                        </div>
                                                        <input 
                                                            type="text" 
                                                            placeholder="Company / Sports Franchise" 
                                                            value={contactForm.org}
                                                            onChange={(e) => setContactForm({...contactForm, org: e.target.value})}
                                                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                                        />
                                                        <textarea 
                                                            required
                                                            rows="3"
                                                            placeholder="Briefly describe your project or collaboration requirement..." 
                                                            value={contactForm.message}
                                                            onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                                                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                                                        />
                                                        <button 
                                                            type="submit" 
                                                            className="w-full py-3 rounded-xl font-cyber font-bold text-xs tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-neon-glow hover:brightness-110 transition-all">
                                                            SEND ANALYTICS INQUIRY
                                                        </button>
                                                    </form>
                                                )}
                                            </div>

                                            <div className="pt-4 border-t border-slate-850/80 flex justify-between text-[10px] text-slate-500">
                                                <span>Location: Mumbai / London</span>
                                                <span>Work: Freelance / Advisory</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )}

                        </div>
                    </main>

                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    