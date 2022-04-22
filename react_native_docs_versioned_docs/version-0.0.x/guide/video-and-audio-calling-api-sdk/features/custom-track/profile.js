export const audioProfiles = {
  "speech_low_quality": {
    sampleRate: 16000,
    bitRate: 24,
    sampleSize: 16,
    stereo: "Disabled",
    autoGainControl: "Enabled",
    echoCancellation: "Enabled",
    noiseSuppression: "Enabled"
  },
  "speech_standard": {
    sampleRate: 32000,
    bitRate: 24,
    sampleSize: 24,
    stereo: "Disabled",
    autoGainControl: "Enabled",
    echoCancellation: "Enabled",
    noiseSuppression: "Enabled"
  },
  "music_standard": {
    sampleRate: 48000,
    bitRate: 40,
    sampleSize: 32,
    stereo: "Disabled",
    autoGainControl: "Disabled",
    echoCancellation: "Disabled",
    noiseSuppression: "Disabled"
  },
  "standard_stereo": {
    sampleRate: 48000,
    sampleSize: 32,
    bitRate: 64,
    stereo: "Disabled",
    autoGainControl: "Disabled",
    echoCancellation: "Disabled",
    noiseSuppression: "Disabled"
  },
  "high_quality": {
    sampleRate: 48000,
    sampleSize: 32,
    bitRate: 128,
    stereo: "Disabled",
    autoGainControl: "Disabled",
    echoCancellation: "Disabled",
    noiseSuppression: "Disabled"
  },
  "high_quality_stereo": {
    sampleRate: 48000,
    sampleSize: 32,
    bitRate: 192,
    stereo: "Enabled",
    autoGainControl: "Disabled",
    echoCancellation: "Disabled",
    noiseSuppression: "Disabled"
  }
};

export const videoProfiles = {
  // TODO: portrait mode
  "h90p_w160p": {
    width: 160,
    height: 90,
    bitRate: 60 * 1000,
    frameRate: 15
  },
  "h180p_w320p": {
    width: 320,
    height: 180,
    bitRate: 120 * 1000,
    frameRate: 15
  },
  "h216p_w384p": {
    width: 384,
    height: 216,
    bitRate: 180 * 1000,
    frameRate: 15
  },
  "h360p_w640p": {
    width: 640,
    height: 360,
    bitRate: 300 * 1000,
    frameRate: 20
  },
  "h540p_w960p": {
    width: 960,
    height: 540,
    bitRate: 600 * 1000,
    frameRate: 25
  },
  "h720p_w1280p": {
    width: 1280,
    height: 720,
    bitRate: 2000 * 1000,
    frameRate: 30
  },
  "h1080p_w1920p": {
    width: 1920,
    height: 1080,
    bitRate: 3000 * 1000,
    frameRate: 30
  },
  "h1440p_w2560p": {
    width: 2560,
    height: 1440,
    bitRate: 5000 * 1000,
    frameRate: 30
  },
  "h2160p_w3840p": {
    width: 3840,
    height: 2160,
    bitRate: 8000 * 1000,
    frameRate: 30
  },
  "h120p_w160p": {
    width: 160,
    height: 120,
    bitRate: 80 * 1000,
    frameRate: 15
  },
  "h180p_w240p": {
    width: 240,
    height: 180,
    bitRate: 100 * 1000,
    frameRate: 15
  },
  "h240p_w320p": {
    width: 320,
    height: 240,
    bitRate: 150 * 1000,
    frameRate: 15
  },
  "h360p_w480p": {
    width: 480,
    height: 360,
    bitRate: 225 * 1000,
    frameRate: 20
  },
  "h480p_w640p": {
    width: 640,
    height: 480,
    bitRate: 300 * 1000,
    frameRate: 25
  },
  "h540p_w720p": {
    width: 720,
    height: 540,
    bitRate: 450 * 1000,
    frameRate: 30
  },
  "h720p_w1920p": {
    width: 1920,
    height: 1080,
    bitRate: 1500 * 1000,
    frameRate: 30
  },
  "h1080p_w1440p": {
    width: 1440,
    height: 1080,
    bitRate: 2500 * 1000,
    frameRate: 30
  },
  "h1440p_w1920p": {
    width: 1920,
    height: 1440,
    bitRate: 3500 * 1000,
    frameRate: 30
  }
};
export const screenShareProfiles = {
  "h360p_30fps": {
    width: 640,
    height: 360,
    bitRate: 200 * 1000,
    frameRate: 3
  },
  "h720p_5fps": {
    width: 1280,
    height: 720,
    bitRate: 400 * 1000,
    frameRate: 5
  },
  "h720p_15fps": {
    width: 1280,
    height: 720,
    bitRate: 1000 * 1000,
    frameRate: 15
  },
  "h1080p_15fps": {
    width: 1920,
    height: 1080,
    bitRate: 1500 * 1000,
    frameRate: 15
  },
  "h1080p_30fps": {
    width: 1920,
    height: 1080,
    bitRate: 1000 * 1000,
    frameRate: 15
  }
};