/* NeuroColor Atlas Test - Research Version 2
   Stimuli Module - Manages all task stimuli and data structures
   Scientific Colour Task with CIELCh specifications
   Face Task Stimuli with Emotions and Colours
   Indian Chromatic Memory Task with Pilot Colours */

const Stimuli = {
    // AFT Reference Colors - Autonomous Chromatic Field Test
    aft_reference_colors: [
        { id: 'aft_red', name: 'Red', hex: '#FF0000', rgb: 'rgb(255, 0, 0)' },
        { id: 'aft_green', name: 'Green', hex: '#00FF00', rgb: 'rgb(0, 255, 0)' },
        { id: 'aft_blue', name: 'Blue', hex: '#0000FF', rgb: 'rgb(0, 0, 255)' },
        { id: 'aft_yellow', name: 'Yellow', hex: '#FFFF00', rgb: 'rgb(255, 255, 0)' },
        { id: 'aft_purple', name: 'Purple', hex: '#800080', rgb: 'rgb(128, 0, 128)' },
        { id: 'aft_cyan', name: 'Cyan', hex: '#00FFFF', rgb: 'rgb(0, 255, 255)' }
    ],

    // Emotion Rating Options
    emotion_options: [
        { id: 'joy', label: 'Joy / Happy' },
        { id: 'calm', label: 'Calm / Content' },
        { id: 'excited', label: 'Excited / Interested' },
        { id: 'love', label: 'Love / Warmth' },
        { id: 'sad', label: 'Sad' },
        { id: 'angry', label: 'Angry' },
        { id: 'fearful', label: 'Fearful / Anxious' },
        { id: 'disgusted', label: 'Disgusted' },
        { id: 'surprised', label: 'Surprised' },
        { id: 'bored', label: 'Bored / Tired' },
        { id: 'no_emotion', label: 'No emotion' },
        { id: 'other', label: 'Other' }
    ],

    // Face Task Colours (12 colours in 4x3 grid)
    face_task_colors: [
        { id: 'color_red', name: 'Red', hex: '#FF0000' },
        { id: 'color_orange', name: 'Orange', hex: '#FFA500' },
        { id: 'color_yellow', name: 'Yellow', hex: '#FFFF00' },
        { id: 'color_green', name: 'Green', hex: '#00CC00' },
        { id: 'color_teal', name: 'Teal', hex: '#008080' },
        { id: 'color_blue', name: 'Blue', hex: '#0000FF' },
        { id: 'color_purple', name: 'Purple', hex: '#800080' },
        { id: 'color_pink', name: 'Pink', hex: '#FF69B4' },
        { id: 'color_brown', name: 'Brown', hex: '#8B4513' },
        { id: 'color_white', name: 'White', hex: '#FFFFFF' },
        { id: 'color_grey', name: 'Grey', hex: '#808080' },
        { id: 'color_black', name: 'Black', hex: '#000000' }
    ],

    // Facial Expression Categories
    facial_expressions: [
        { id: 'happiness', name: 'Happiness', emoji: '😊' },
        { id: 'sadness', name: 'Sadness', emoji: '😢' },
        { id: 'anger', name: 'Anger', emoji: '😠' },
        { id: 'fear', name: 'Fear', emoji: '😨' },
        { id: 'disgust', name: 'Disgust', emoji: '🤢' },
        { id: 'neutral', name: 'Neutral', emoji: '😐' }
    ],

    // Indian Chromatic Memory Task - 10 Pilot Colours
    // Provisional values - to be measured by spectrophotometer
    indian_memory_colors: [
        {
            id: 'icm_01',
            trial_number: 1,
            name: 'Kumkum Red',
            cultural_significance: 'Ceremonial powder used in Hindu rituals',
            cielab: { L: 45, a: 65, b: 50 },
            hex_provisional: '#D01F18',
            note_provisional: true
        },
        {
            id: 'icm_02',
            trial_number: 2,
            name: 'Haldi Yellow',
            cultural_significance: 'Turmeric - sacred spice used in ceremonies',
            cielab: { L: 68, a: 18, b: 65 },
            hex_provisional: '#F4C430',
            note_provisional: true
        },
        {
            id: 'icm_03',
            trial_number: 3,
            name: 'Kesari / Saffron',
            cultural_significance: 'Saffron threads - precious spice and national colour',
            cielab: { L: 60, a: 35, b: 55 },
            hex_provisional: '#FF9900',
            note_provisional: true
        },
        {
            id: 'icm_04',
            trial_number: 4,
            name: 'Marigold Orange',
            cultural_significance: 'Flower used in festivals and offerings',
            cielab: { L: 62, a: 45, b: 60 },
            hex_provisional: '#FFB347',
            note_provisional: true
        },
        {
            id: 'icm_05',
            trial_number: 5,
            name: 'Mehendi Green-Brown',
            cultural_significance: 'Henna paste applied for celebrations and weddings',
            cielab: { L: 42, a: -8, b: 20 },
            hex_provisional: '#6B5344',
            note_provisional: true
        },
        {
            id: 'icm_06',
            trial_number: 6,
            name: 'Indigo / Neel',
            cultural_significance: 'Traditional dye used in textiles and clothing',
            cielab: { L: 30, a: 15, b: -40 },
            hex_provisional: '#4B0082',
            note_provisional: true
        },
        {
            id: 'icm_07',
            trial_number: 7,
            name: 'Peacock Blue-Green',
            cultural_significance: 'Inspired by sacred peacock bird',
            cielab: { L: 40, a: -15, b: -30 },
            hex_provisional: '#00CED1',
            note_provisional: true
        },
        {
            id: 'icm_08',
            trial_number: 8,
            name: 'Chandan Beige',
            cultural_significance: 'Sandalwood - fragrant wood used in rituals and cosmetics',
            cielab: { L: 72, a: 12, b: 22 },
            hex_provisional: '#D4B896',
            note_provisional: true
        },
        {
            id: 'icm_09',
            trial_number: 9,
            name: 'Terracotta / Mitti Brown',
            cultural_significance: 'Earthen clay - traditional pottery and architecture',
            cielab: { L: 50, a: 20, b: 25 },
            hex_provisional: '#A0522D',
            note_provisional: true
        },
        {
            id: 'icm_10',
            trial_number: 10,
            name: 'Jasmine White',
            cultural_significance: 'Fragrant flowers used in garlands and cosmetics',
            cielab: { L: 92, a: 2, b: 5 },
            hex_provisional: '#FFFAF0',
            note_provisional: true
        }
    ],

    // Memory Categories for Indian Chromatic Memory Task
    memory_categories: [
        { id: 'family_person', label: 'Family/person' },
        { id: 'friend_community', label: 'Friend/community' },
        { id: 'home', label: 'Home' },
        { id: 'village_town', label: 'Village/town' },
        { id: 'temple_religious', label: 'Temple/religious place' },
        { id: 'hospital_clinic', label: 'Hospital/clinic' },
        { id: 'school_workplace', label: 'School/workplace' },
        { id: 'festival', label: 'Festival' },
        { id: 'marriage_ceremony', label: 'Marriage/family ceremony' },
        { id: 'religious_ritual', label: 'Religious ritual' },
        { id: 'childhood_event', label: 'Childhood event' },
        { id: 'clothing_textile', label: 'Clothing/textile' },
        { id: 'jewellery_decoration', label: 'Jewellery/decoration' },
        { id: 'household_object', label: 'Household object' },
        { id: 'art_media', label: 'Art/media' },
        { id: 'food_spice_kitchen', label: 'Food/spice/kitchen' },
        { id: 'cosmetics_body', label: 'Cosmetics/body decoration' },
        { id: 'medicine_health', label: 'Medicine/health' },
        { id: 'flowers_plants', label: 'Flowers/plants' },
        { id: 'animals_birds', label: 'Animals/birds' },
        { id: 'water', label: 'Water/pond/river/sea' },
        { id: 'sky_night', label: 'Sky/night' },
        { id: 'land_soil', label: 'Land/soil' },
        { id: 'summer', label: 'Summer' },
        { id: 'monsoon_rain', label: 'Monsoon/rain' },
        { id: 'winter', label: 'Winter' },
        { id: 'time_of_day', label: 'Morning/evening/night' },
        { id: 'no_memory', label: 'No memory' },
        { id: 'not_sure', label: 'Not sure' },
        { id: 'other', label: 'Other' }
    ],

    // Emotional response scale
    emotional_responses: [
        { id: 'very_positive', label: 'Very Positive' },
        { id: 'positive', label: 'Positive' },
        { id: 'neutral', label: 'Neutral' },
        { id: 'negative', label: 'Negative' },
        { id: 'very_negative', label: 'Very Negative' }
    ],

    // Face-to-Colour Task Trials
    face_to_color_trials: [
        { id: 'ftc_01', expression_id: 'happiness', expression_name: 'Happiness', trial_number: 1 },
        { id: 'ftc_02', expression_id: 'sadness', expression_name: 'Sadness', trial_number: 2 },
        { id: 'ftc_03', expression_id: 'anger', expression_name: 'Anger', trial_number: 3 },
        { id: 'ftc_04', expression_id: 'fear', expression_name: 'Fear', trial_number: 4 },
        { id: 'ftc_05', expression_id: 'disgust', expression_name: 'Disgust', trial_number: 5 },
        { id: 'ftc_06', expression_id: 'neutral', expression_name: 'Neutral', trial_number: 6 }
    ],

    // Colour-to-Face Task Trials
    color_to_face_trials: [
        { id: 'ctf_01', color_id: 'color_red', color_name: 'Red', trial_number: 1 },
        { id: 'ctf_02', color_id: 'color_orange', color_name: 'Orange', trial_number: 2 },
        { id: 'ctf_03', color_id: 'color_yellow', color_name: 'Yellow', trial_number: 3 },
        { id: 'ctf_04', color_id: 'color_green', color_name: 'Green', trial_number: 4 },
        { id: 'ctf_05', color_id: 'color_blue', color_name: 'Blue', trial_number: 5 },
        { id: 'ctf_06', color_id: 'color_purple', color_name: 'Purple', trial_number: 6 }
    ],

    // Scientific Colour Task - 16 Trials
    scientific_color_full: [
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

    // Scientific Colour Task - Short Version (8 trials)
    scientific_color_short: [
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

    // Get AFT Reference Colors
    getAFTColors: function() {
        return this.aft_reference_colors;
    },

    // Get Emotion Options
    getEmotionOptions: function() {
        return this.emotion_options;
    },

    // Get Face Task Colours
    getFaceTaskColors: function() {
        return this.face_task_colors;
    },

    // Get Facial Expressions
    getFacialExpressions: function() {
        return this.facial_expressions;
    },

    // Get Indian Memory Colors
    getIndianMemoryColors: function() {
        return this.indian_memory_colors;
    },

    // Get Memory Categories
    getMemoryCategories: function() {
        return this.memory_categories;
    },

    // Get Emotional Responses
    getEmotionalResponses: function() {
        return this.emotional_responses;
    },

    // Get Face-to-Colour Trials
    getFaceToColorTrials: function() {
        return this.face_to_color_trials;
    },

    // Get Colour-to-Face Trials
    getColorToFaceTrials: function() {
        return this.color_to_face_trials;
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

    // Initialize trial arrays
    initializeTrials: function() {
        console.log('Stimuli initialized - All tasks loaded');
        return {
            aft_reference: this.aft_reference_colors.length,
            emotion_options: this.emotion_options.length,
            face_task_colors: this.face_task_colors.length,
            facial_expressions: this.facial_expressions.length,
            indian_memory_colors: this.indian_memory_colors.length,
            memory_categories: this.memory_categories.length,
            face_to_color_trials: this.face_to_color_trials.length,
            color_to_face_trials: this.color_to_face_trials.length,
            practice_trials: this.practice_trials.length,
            scientific_color_full: this.scientific_color_full.length,
            scientific_color_short: this.scientific_color_short.length
        };
    }
};
