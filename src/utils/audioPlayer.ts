/**
 * Web Audio API based delicate music box synthesizer.
 * Creates an intimate, dreamy acoustic music-box melody without external audio files.
 */

class MusicBoxSynth {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timerId: number | null = null;
  private noteIndex: number = 0;

  // Romantic gentle music box melody (frequencies in Hz)
  // Progression in C major / A minor: intimate, warm, lullaby pace
  private melody: Array<{ note: number; duration: number }> = [
    // Phrase 1: C - Em - Am
    { note: 523.25, duration: 0.6 }, // C5
    { note: 659.25, duration: 0.6 }, // E5
    { note: 783.99, duration: 0.8 }, // G5
    { note: 659.25, duration: 0.6 }, // E5
    { note: 587.33, duration: 0.6 }, // D5
    { note: 523.25, duration: 0.9 }, // C5
    { note: 440.00, duration: 0.6 }, // A4
    { note: 523.25, duration: 0.9 }, // C5

    // Phrase 2: F - G - C
    { note: 698.46, duration: 0.6 }, // F5
    { note: 659.25, duration: 0.6 }, // E5
    { note: 587.33, duration: 0.8 }, // D5
    { note: 523.25, duration: 0.6 }, // C5
    { note: 493.88, duration: 0.6 }, // B4
    { note: 523.25, duration: 1.2 }, // C5
    { note: 0, duration: 0.4 },      // rest

    // Phrase 3: Ascending tender motif
    { note: 659.25, duration: 0.6 }, // E5
    { note: 783.99, duration: 0.6 }, // G5
    { note: 880.00, duration: 0.9 }, // A5
    { note: 783.99, duration: 0.6 }, // G5
    { note: 659.25, duration: 0.6 }, // E5
    { note: 587.33, duration: 0.9 }, // D5
    { note: 523.25, duration: 0.6 }, // C5
    { note: 587.33, duration: 0.9 }, // D5

    // Phrase 4: Gentle resolution
    { note: 659.25, duration: 0.6 }, // E5
    { note: 523.25, duration: 0.6 }, // C5
    { note: 440.00, duration: 0.8 }, // A4
    { note: 392.00, duration: 0.6 }, // G4
    { note: 440.00, duration: 0.6 }, // A4
    { note: 523.25, duration: 1.5 }, // C5
    { note: 0, duration: 0.6 },      // rest
  ];

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private playTone(freq: number, duration: number) {
    if (!this.ctx || freq === 0) return;

    const now = this.ctx.currentTime;
    
    // Fundamental oscillator (sine for pure warmth)
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();

    // Soft chime overtone (triangle for music box resonance)
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, now);

    // Overtone 2 octaves + fifth up very softly
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 2.01, now);

    // Filter to warm up tone and cut harsh high ends
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1800, now);

    // Gentle music-box envelope: sharp soft attack, long exponential decay
    const masterGain = this.ctx.createGain();
    masterGain.gain.setValueAtTime(0.0001, now);
    masterGain.gain.linearRampToValueAtTime(0.18, now + 0.02);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration + 1.2);

    gain1.gain.setValueAtTime(0.7, now);
    gain2.gain.setValueAtTime(0.2, now);

    osc1.connect(gain1);
    osc2.connect(gain2);

    gain1.connect(filter);
    gain2.connect(filter);

    filter.connect(masterGain);
    masterGain.connect(this.ctx.destination);

    osc1.start(now);
    osc2.start(now);

    osc1.stop(now + duration + 1.3);
    osc2.stop(now + duration + 1.3);
  }

  private step = () => {
    if (!this.isPlaying) return;

    const current = this.melody[this.noteIndex];
    this.playTone(current.note, current.duration);

    this.noteIndex = (this.noteIndex + 1) % this.melody.length;

    // Schedule next note with a humanized tempo
    const delay = (current.duration * 750) + (Math.random() * 40 - 20);
    this.timerId = window.setTimeout(this.step, delay);
  };

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public play() {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.step();
  }

  public stop() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const musicBox = new MusicBoxSynth();
