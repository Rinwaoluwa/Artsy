import Sound from '../assets/ClickSound.m4a';

// when a user clicks on an item to shop this hook should be called;
function useSound() {
    //  if(!allowSound) return; tey passing allow sound into a context provider or tell adam to use redux
    //  to make it a global state so this hook cann access it; the allow sound will be in a setting for cart
    const playSound = function () {
        const sound  = new Audio(Sound);
        sound.play()
    }
    playSound()
}

export { useSound }