/* NeuroColor Atlas Test - Research Version 2
   Stimuli Module - Manages all task stimuli and data structures
   Scientific Colour Task with CIELCh specifications */

const Stimuli = {
    // AFT Reference Colors - Autonomous Chromatic Field Test
    aft_reference_colors: [
        { id: 'aft_red', name: 'Red', hex: '#FF0000', rgb: 'rgb(255, 0, 0)' },
        { id: 'aft_green', name: 'Green', hex: '#00FF00', rgb: 'rgb(0, 255, 0)' },
        { id: 'aft_blue', name: 'Blue', hex: '#0000FF', rgb: 'rgb(0, 0, 255)' },
        { id: aft_yellow', name: 'Yellow', hex: '#FFFF00', rgb: 'rgb(255, 255, 0)' },
        { id: 'aft_purple', name: 'Purple', hex: '#800080', rgb: 'rgb(128, 0, 128)' },
        { id: 'aft_cyan', name: 'Cyan', hex: '#00FFFF', rgb: 'rgb(0, 255, 255)' }
    ],

    // Scientific Colour Task - 16 Trials
    // CIELCh specifications: L*=60, C*=25 (low) and C*=45 (high), Hues: 30°, 90°, 150°, 210°, 270°, 330°
    // Neutral grey baseline: L*=60, C*=0
    
    scientific_color_full: [
        // Trial 1: Neutral Grey Baseline (anchor)
        {
            id: 'SC00',
            trial_number: 1,
            type: 'neutral_grey',
            name: 'Neutral Grey Baseline',
            cielab: { L: 60, a: 0, b: 0 },
            cielch: { L: 60, C: 0, h: 'N/A' },
            hex_provisional: '#9A9A9A',
            exposure_duration: 3,
            is_anchor: true
        },

        // Chromatic Conditions - Low Chroma (C*=25)
        {
            id: 'SC01',
            trial_number: 2,
            type: 'chromatic',
            name: 'Red-Yellow (30°) Low Chroma',
            cielab: { L: 60, a: 21.65, b: 12.5 },
            cielch: { L: 60, C: 25, h: 30 },
            hex_provisional: '#C9925C',
            exposure_duration: 4,
            is_anchor: false
        },

        {
            id: 'SC02',
            trial_number: 3,
            type: 'chromatic',
            name: 'Yellow (90°) Low Chroma',
            cielab: { L: 60, a: -0.27, b: 24.99 },
            cielch: { L: 60, C: 25, h: 90 },
            hex_provisional: '#CABD41',
            exposure_duration: 4,
            is_anchor: false
        },

        {
            id: 'SC03',
            trial_number: 4,
            type: 'chromatic',
            name: 'Yellow-Green (150°) Low Chroma',
            cielab: { L: 60, a: -21.65, b: 12.5 },
            cielch: { L: 60, C: 25, h: 150 },
            hex_provisional: '#72B563',
            exposure_duration: 4,
            is_anchor: false
        },

        {
            id: 'SC04',
            trial_number: 5,
            type: 'chromatic',
            name: 'Cyan (210°) Low Chroma',
            cielab: { L: 60, a: -21.65, b: -12.5 },
            cielch: { L: 60, C: 25, h: 210 },
            hex_provisional: '#6DB3BE',
            exposure_duration: 4,
            is_anchor: false
        },

        {
            id: 'SC05',
            trial_number: 6,
            type: 'chromatic',
            name: 'Blue (270°) Low Chroma',
            cielab: { L: 60, a: 0.27, b: -24.99 },
            cielch: { L: 60, C: 25, h: 270 },
            hex_provisional: '#6B7FBE',
            exposure_duration: 4,
            is_anchor: false
        },

        {
            id: 'SC06',
            trial_number: 7,
            type: 'chromatic',
            name: 'Magenta (330°) Low Chroma',
            cielab: { L: 60, a: 21.65, b: -12.5 },
            cielch: { L: 60, C: 25, h: 330 },
            hex_provisional: '#C07B92',
            exposure_duration: 4,
            is_anchor: false
        },

        // Neutral Grey Baseline - Repeat (anchor)
        {
            id: 'SC00',
            trial_number: 8,
            type: 'neutral_grey',
            name: 'Neutral Grey Baseline',
            cielab: { L: 60, a: 0, b: 0 },
            cielch: { L: 60, C: 0, h: 'N/A' },
            hex_provisional: '#9A9A9A',
            exposure_duration: 3,
            is_anchor: true,
            note: 'MANDATORY BREAK AFTER THIS TRIAL'
        },

        // Chromatic Conditions - High Chroma (C*=45)
        {
            id: 'SC07',
            trial_number: 9,
            type: 'chromatic',
            name: 'Red-Yellow (30°) High Chroma',
            cielab: { L: 60, a: 38.97, b: 22.5 },
            cielch: { L: 60, C: 45, h: 30 },
            hex_provisional: '#E88238',
            exposure_duration: 4,
            is_anchor: false
        },

        {
            id: 'SC08',
            trial_number: 10,
            type: 'chromatic',
            name: 'Yellow (90°) High Chroma',
            cielab: { L: 60, a: -0.49, b: 44.99 },
            cielch: { L: 60, C: 45, h: 90 },
            hex_provisional: '#D9AD0B',
            exposure_duration: 4,
            is_anchor: false
        },

        {
            id: 'SC09',
            trial_number: 11,
            type: 'chromatic',
            name: 'Yellow-Green (150°) High Chroma',
            cielab: { L: 60, a: -38.97, b: 22.5 },
            cielch: { L: 60, C: 45, h: 150 },
            hex_provisional: '#4DBD7A',
            exposure_duration: 4,
            is_anchor: false
        },

        {
            id: 'SC10',
            trial_number: 12,
            type: 'chromatic',
            name: 'Cyan (210°) High Chroma',
            cielab: { L: 60, a: -38.97, b: -22.5 },
            cielch: { L: 60, C: 45, h: 210 },
            hex_provisional: '#46B8CC',
            exposure_duration: 4,
            is_anchor: false
        },

        {
            id: 'SC11',
            trial_number: 13,
            type: 'chromatic',
            name: 'Blue (270°) High Chroma',
            cielab: { L: 60, a: 0.49, b: -44.99 },
            cielch: { L: 60, C: 45, h: 270 },
            hex_provisional: '#5A5FD3',
            exposure_duration: 4,
            is_anchor: false
        },

        {
            id: 'SC12',
            trial_number: 14,
            type: 'chromatic',
            name: 'Magenta (330°) High Chroma',
            cielab: { L: 60, a: 38.97, b: -22.5 },
            cielch: { L: 60, C: 45, h: 330 },
            hex_provisional: '#DB5B72',
            exposure_duration: 4,
            is_anchor: false
        },

        // Neutral Grey Baseline - Repeat (anchor)
        {
            id: 'SC00',
            trial_number: 15,
            type: 'neutral_grey',
            name: 'Neutral Grey Baseline',
            cielab: { L: 60, a: 0, b: 0 },
            cielch: { L: 60, C: 0, h: 'N/A' },
            hex_provisional: '#9A9A9A',
            exposure_duration: 3,
            is_anchor: true
        },

        // Final Chromatic - Red-Yellow at Low Chroma (SC01 repeat)
        {
            id: 'SC01',
            trial_number: 16,
            type: 'chromatic',
            name: 'Red-Yellow (30°) Low Chroma',
            cielab: { L: 60, a: 21.65, b: 12.5 },
            cielch: { L: 60, C: 25, h: 30 },
            hex_provisional: '#C9925C',
            exposure_duration: 4,
            is_anchor: false
        }
    ],

    // Dementia-Friendly Short Version - 8 balanced trials
    scientific_color_short: [
        // Trial 1: Neutral Grey Baseline
        {
            id: 'SC00',
            trial_number: 1,
            type: 'neutral_grey',
            name: 'Neutral Grey Baseline',
            cielab: { L: 60, a: 0, b: 0 },
            cielch: { L: 60, C: 0, h: 'N/A' },
            hex_provisional: '#9A9A9A',
            exposure_duration: 3,
            is_anchor: true
        },

        // Low Chroma - Representative hues
        {
            id: 'SC01',
            trial_number: 2,
            type: 'chromatic',
            name: 'Red-Yellow (30°) Low Chroma',
            cielab: { L: 60, a: 21.65, b: 12.5 },
            cielch: { L: 60, C: 25, h: 30 },
            hex_provisional: '#C9925C',
            exposure_duration: 4,
            is_anchor: false
        },

        {
            id: 'SC03',
            trial_number: 3,
            type: 'chromatic',
            name: 'Yellow-Green (150°) Low Chroma',
            cielab: { L: 60, a: -21.65, b: 12.5 },
            cielch: { L: 60, C: 25, h: 150 },
            hex_provisional: '#72B563',
            exposure_duration: 4,
            is_anchor: false
        },

        {
            id: 'SC05',
            trial_number: 4,
            type: 'chromatic',
            name: 'Blue (270°) Low Chroma',
            cielab: { L: 60, a: 0.27, b: -24.99 },
            cielch: { L: 60, C: 25, h: 270 },
            hex_provisional: '#6B7FBE',
            exposure_duration: 4,
            is_anchor: false
        },

        // High Chroma - Representative hues
        {
            id: 'SC07',
            trial_number: 5,
            type: 'chromatic',
            name: 'Red-Yellow (30°) High Chroma',
            cielab: { L: 60, a: 38.97, b: 22.5 },
            cielch: { L: 60, C: 45, h: 30 },
            hex_provisional: '#E88238',
            exposure_duration: 4,
            is_anchor: false
        },

        {
            id: 'SC09',
            trial_number: 6,
            type: 'chromatic',
            name: 'Yellow-Green (150°) High Chroma',
            cielab: { L: 60, a: -38.97, b: 22.5 },
            cielch: { L: 60, C: 45, h: 150 },
            hex_provisional: '#4DBD7A',
            exposure_duration: 4,
            is_anchor: false
        },

        {
            id: 'SC11',
            trial_number: 7,
            type: 'chromatic',
            name: 'Blue (270°) High Chroma',
            cielab: { L: 60, a: 0.49, b: -44.99 },
            cielch: { L: 60, C: 45, h: 270 },
            hex_provisional: '#5A5FD3',
            exposure_duration: 4,
            is_anchor: false
        },

        // Neutral Grey Baseline - Final
        {
            id: 'SC00',
            trial_number: 8,
            type: 'neutral_grey',
            name: 'Neutral Grey Baseline',
            cielab: { L: 60, a: 0, b: 0 },
            cielch: { L: 60, C: 0, h: 'N/A' },
            hex_provisional: '#9A9A9A',
            exposure_duration: 3,
            is_anchor: true
        }
    ],

    // Practice Trial Stimuli
    practice_trials: [
        { id: 'practice_1', type: 'color', stimulus: 'Red', correct_response: 'aft_red' },
        { id: 'practice_2', type: 'color', stimulus: 'Blue', correct_response: 'aft_blue' }
    ],

    // Full-Screen Colour Task Stimuli (placeholder)
    fullscreen_color_trials: [],

    // Face-to-Colour Task Stimuli (placeholder)
    face_to_color_trials: [],

    // Colour-to-Face Task Stimuli (placeholder)
    color_to_face_trials: [],

    // Indian Chromatic Memory Task Stimuli (placeholder)
    indian_memory_trials: [],

    // Sample Face IDs for future use
    face_ids: [
        'face_001', 'face_002', 'face_003', 'face_004', 'face_005',
        'face_006', 'face_007', 'face_008', 'face_009', 'face_010'
    ],

    // Get AFT Reference Colors
    getAFTColors: function() {
        return this.aft_reference_colors;
    },

    // Get Practice Trials
    getPracticeTrials: function() {
        return this.practice_trials;
    },

    // Get a specific color by ID
    getColorById: function(colorId) {
        return this.aft_reference_colors.find(c => c.id === colorId);
    },

    // Get Scientific Colour Task - Full Version
    getScientificColorFull: function() {
        return this.scientific_color_full;
    },

    // Get Scientific Colour Task - Short Dementia Version
    getScientificColorShort: function() {
        return this.scientific_color_short;
    },

    // Initialize trial arrays (to be expanded with actual stimuli)
    initializeTrials: function() {
        console.log('Stimuli initialized - Scientific Colour Task loaded');
        return {
            aft_reference: this.aft_reference_colors.length,
            practice_trials: this.practice_trials.length,
            scientific_color_full: this.scientific_color_full.length,
            scientific_color_short: this.scientific_color_short.length,
            fullscreen_color_trials: this.fullscreen_color_trials.length,
            face_to_color_trials: this.face_to_color_trials.length,
            color_to_face_trials: this.color_to_face_trials.length,
            indian_memory_trials: this.indian_memory_trials.length
        };
    }
};
