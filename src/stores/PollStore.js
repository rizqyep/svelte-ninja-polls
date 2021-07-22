import { writeable } from 'svelte/store';


const PollStore = writeable([{
    id: 1,
    question: "Python or JS?",
    answerA: "Python",
    answerB: "JS",
    votesA: 9,
    votesB: 25,
}, ]);

export default PollStore;