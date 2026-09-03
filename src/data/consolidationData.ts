import {
  VocabularyItem,
  GrammarStructureItem,
  ParaphrasePair,
  MatchingTaskItem,
  GapFillTaskItem,
  ReferenceTaskItem,
  TransformationTaskItem,
} from '../types';

export const CONSOLIDATION_VOCABULARY: VocabularyItem[] = [
  {
    id: 'vocab-1',
    word: 'Phenology',
    phonetic: '/fɪˈnɒl.ə.dʒi/',
    partOfSpeech: 'noun',
    definition:
      'The scientific study of cyclic and seasonal natural phenomena, especially in relation to climate and plant and animal life cycles.',
    definitionVi:
      'Thời học / Hiện tượng học: Ngành nghiên cứu quy luật thời gian của các hiện tượng tự nhiên theo mùa (như ra hoa, di cư, đẻ trứng) dưới tác động của khí hậu.',
    passageContext:
      "Scientists refer to the timing of such lifecycle events as 'phenology', so when an animal or plant starts to do something earlier in the year than it usually does, it is said to be 'advancing its phenology'.",
    paragraphRef: 2,
    collocations: ['advance phenology', 'phenological shifts', 'spring phenology', 'timing of lifecycle events'],
    synonyms: ['seasonal timing', 'biological calendar', 'periodic lifecycle timing'],
    ieltsBand: 'Band 8.0+',
  },
  {
    id: 'vocab-2',
    word: 'Ecosystem',
    phonetic: '/ˈiː.kəʊˌsɪs.təm/',
    partOfSpeech: 'noun',
    definition:
      'A biological community of interacting organisms and their physical, non-living environment.',
    definitionVi:
      'Hệ sinh thái: Một quần xã sinh vật tương tác mật thiết với nhau và với môi trường vật lý xung quanh.',
    passageContext:
      'If this trend continues, it might have unpredictable knock-on effects for other species in the ecosystem.',
    paragraphRef: 1,
    collocations: ['fragile ecosystem', 'ecosystem balance', 'disrupt an ecosystem', 'species in the ecosystem'],
    synonyms: ['ecological network', 'biome', 'natural habitat community'],
    ieltsBand: 'Band 7.0+',
  },
  {
    id: 'vocab-3',
    word: 'Knock-on effect',
    phonetic: '/ˌnɒk.ɒn ɪˈfekt/',
    partOfSpeech: 'noun phrase',
    definition:
      'A secondary, indirect, or cumulative chain-reaction consequence caused by a primary event or process.',
    definitionVi:
      'Hiệu ứng dây chuyền, hệ quả gián tiếp liên tiếp xảy ra sau một sự kiện ban đầu.',
    passageContext:
      'If this trend continues, it might have unpredictable knock-on effects for other species in the ecosystem.',
    paragraphRef: 1,
    collocations: ['unpredictable knock-on effects', 'have a knock-on effect on', 'trigger a knock-on effect'],
    synonyms: ['domino effect', 'ripple effect', 'repercussions', 'chain reaction'],
    ieltsBand: 'Band 7.5+',
  },
  {
    id: 'vocab-4',
    word: 'Predator',
    phonetic: '/ˈpred.ə.tər/',
    partOfSpeech: 'noun',
    definition:
      'An animal that naturally hunts, kills, and feeds on other animals for survival.',
    definitionVi:
      'Động vật ăn thịt, kẻ săn mồi tự nhiên trong chuỗi thức ăn.',
    passageContext:
      'Butterfly eggs develop into caterpillars and these insects ... consume vast quantities of plant material, and in turn act as prey for birds as well as bats and other small mammals.',
    paragraphRef: 1,
    collocations: ['natural predator', 'apex predator', 'predator-prey relationship'],
    synonyms: ['hunter', 'carnivore', 'natural enemy'],
    ieltsBand: 'Band 7.0+',
  },
  {
    id: 'vocab-5',
    word: 'Prey',
    phonetic: '/preɪ/',
    partOfSpeech: 'noun',
    definition:
      'An animal that is hunted, caught, and killed by another animal for nourishment.',
    definitionVi:
      'Con mồi, sinh vật bị các loài săn mồi săn lùng và ăn thịt.',
    passageContext:
      '...and in turn act as prey for birds as well as bats and other small mammals.',
    paragraphRef: 1,
    collocations: ['act as prey for', 'fall prey to', 'easy prey', 'prey species'],
    synonyms: ['quarry', 'victim', 'target organism'],
    ieltsBand: 'Band 7.0+',
  },
  {
    id: 'vocab-6',
    word: 'Abundance',
    phonetic: '/əˈbʌn.dəns/',
    partOfSpeech: 'noun',
    definition:
      'The quantity or representation of a species present in a particular ecological community or area.',
    definitionVi:
      'Độ phong phú, số lượng dồi dào của một loài sinh vật tại một khu vực nhất định.',
    passageContext:
      'They then estimated the abundance and distribution of each species across this time, along with how far north in the country they had moved.',
    paragraphRef: 4,
    collocations: ['abundance and distribution', 'relative abundance', 'species abundance', 'in great abundance'],
    synonyms: ['profusion', 'copiousness', 'plentifulness', 'population size'],
    ieltsBand: 'Band 7.5+',
  },
  {
    id: 'vocab-7',
    word: 'Distribution',
    phonetic: '/ˌdɪs.trɪˈbjuː.ʃən/',
    partOfSpeech: 'noun',
    definition:
      'The natural geographical range or spatial spread across which a species occurs.',
    definitionVi:
      'Sự phân bố địa lý, phạm vi lan tỏa không gian của một loài sinh vật.',
    passageContext:
      '...had the most positive trends in abundance, distribution and northwards extent.',
    paragraphRef: 6,
    collocations: ['geographical distribution', 'spatial distribution', 'species distribution', 'distribution pattern'],
    synonyms: ['range', 'spread', 'dispersion', 'territorial reach'],
    ieltsBand: 'Band 7.5+',
  },
  {
    id: 'vocab-8',
    word: 'Endangered',
    phonetic: '/ɪnˈdeɪn.dʒəd/',
    partOfSpeech: 'adjective',
    definition:
      'At serious risk of extinction or irreversible population collapse.',
    definitionVi:
      'Có nguy cơ tuyệt chủng cao, đang bị đe dọa nghiêm trọng.',
    passageContext:
      "The beautiful High Brown Fritillary, often described as Britain's most endangered butterfly, is in this group.",
    paragraphRef: 7,
    collocations: ['critically endangered', 'endangered species', 'endangered wildlife'],
    synonyms: ['threatened', 'at risk of extinction', 'vulnerable', 'jeopardized'],
    ieltsBand: 'Band 7.0+',
  },
  {
    id: 'vocab-9',
    word: 'Coppiced',
    phonetic: '/ˈkɒp.ɪst/',
    partOfSpeech: 'adjective',
    definition:
      'Describing woodland where trees or shrubs are periodically cut back to ground level to stimulate new multi-stem growth.',
    definitionVi:
      'Được đốn tỉa định kỳ sát gốc (rừng chồi, rừng tái sinh chồi để lấy củi/vật liệu).',
    passageContext:
      'It is found only in coppiced woodland and limestone pavement habitats.',
    paragraphRef: 7,
    collocations: ['coppiced woodland', 'coppiced trees', 'traditional coppicing'],
    synonyms: ['cut-back woodland', 'managed woodland', 'pollarded'],
    ieltsBand: 'Band 8.0+',
  },
  {
    id: 'vocab-10',
    word: 'Solely',
    phonetic: '/ˈsəʊl.li/',
    partOfSpeech: 'adverb',
    definition:
      'Only and completely; without involving or relying on anything else.',
    definitionVi:
      'Duy nhất, hoàn toàn chỉ dựa vào một điều gì đó mà không có ngoại lệ.',
    passageContext:
      'This may be because the caterpillar exists solely on a diet of a plant called honeysuckle.',
    paragraphRef: 9,
    collocations: ['rely solely on', 'depend solely on', 'exist solely on', 'solely responsible'],
    synonyms: ['exclusively', 'entirely', 'purely', 'singly'],
    ieltsBand: 'Band 7.5+',
  },
  {
    id: 'vocab-11',
    word: 'Enthusiast',
    phonetic: '/ɪnˈθjuː.zi.æst/',
    partOfSpeech: 'noun',
    definition:
      'A person who is filled with intense enthusiasm and devotes free time to an interest or hobby.',
    definitionVi:
      'Người đam mê, người say mê dành thời gian rảnh rỗi theo đuổi một thú vui hoặc nghiên cứu nghiệp dư.',
    passageContext:
      'First, the researchers pulled together data from millions of records that had been submitted by butterfly enthusiasts - people who spend their free time observing...',
    paragraphRef: 4,
    collocations: ['nature enthusiast', 'amateur enthusiast', 'enthusiastic observer'],
    synonyms: ['aficionado', 'hobbyist', 'amateur', 'devotee'],
    ieltsBand: 'Band 7.0+',
  },
  {
    id: 'vocab-12',
    word: 'Colony',
    phonetic: '/ˈkɒl.ə.ni/',
    partOfSpeech: 'noun',
    definition:
      'A localized community or dense social grouping of animals of the same species living together.',
    definitionVi:
      'Quần tụ, bầy đàn, cụm cá thể cùng một loài sinh sống tập trung.',
    passageContext:
      '...the dainty Small Blue, whose colonies are up to a hundred strong...',
    paragraphRef: 6,
    collocations: ['breeding colony', 'dense colony', 'colonies up to a hundred strong'],
    synonyms: ['cluster', 'settlement', 'communal group', 'swarm'],
    ieltsBand: 'Band 7.0+',
  },
];

export const CONSOLIDATION_GRAMMAR: GrammarStructureItem[] = [
  {
    id: 'grammar-1',
    name: 'Negative Inversion with "Only by"',
    category: 'Advanced Inversion & Emphasis',
    formula: 'Only by + [Gerund / Noun Phrase] + [Auxiliary: can/will/do] + [Subject] + [Base Verb]',
    passageExample:
      'Only by arming themselves with an understanding of why butterfly numbers are down can conservationists hope to halt or reverse the decline.',
    paragraphRef: 1,
    explanation:
      'When an adverbial phrase beginning with "Only by" is placed at the front of a sentence for emphasis, subject-auxiliary inversion is mandatory (can conservationists hope...).',
    explanationVi:
      'Khi cụm trạng từ bắt đầu bằng "Only by" (Chỉ bằng cách...) được đảo lên đầu câu để nhấn mạnh điều kiện duy nhất, đảo ngữ giữa trợ động từ và chủ ngữ là bắt buộc: "can conservationists hope...".',
    ieltsApplication:
      'Essential for IELTS Academic Writing Task 2 conclusions to state definitive policy solutions (e.g., "Only by implementing strict carbon tariffs can governments curb industrial emissions").',
    ieltsApplicationVi:
      'Cực kỳ đắc lực trong phần Kết bài Writing Task 2 khi đề xuất giải pháp dứt khoát.',
    practiceExample:
      'Only by reducing industrial greenhouse gases can we hope to protect endangered biodiversity.',
  },
  {
    id: 'grammar-2',
    name: 'Participle Clauses of Result & Circumstance',
    category: 'Syntactic Compression & Cohesion',
    formula: 'Main Clause, + [Present Participle / -ing phrase] + [Object/Complement]',
    passageExample:
      'Under the conditions of climate change, the temperature at any given time in summer is generally getting warmer, leaving butterflies with the challenge of how to deal with this.',
    paragraphRef: 2,
    explanation:
      'The comma + present participle ("leaving butterflies with...") functions as a non-finite result clause expressing the direct consequence of the main clause without requiring a coordinating conjunction like "and so it leaves".',
    explanationVi:
      'Dấu phẩy kết hợp mệnh đề phân từ hiện tại (comma + V-ing: "leaving butterflies...") dùng để chỉ kết quả trực tiếp của mệnh đề chính, giúp câu văn cô đọng và mang tính học thuật cao.',
    ieltsApplication:
      'Ideal for describing cause-and-effect trends in IELTS Writing Task 1 and Task 2.',
    ieltsApplicationVi:
      'Rất phù hợp để miêu tả hệ quả và xu hướng nguyên nhân - kết quả trong cả Task 1 và Task 2.',
    practiceExample:
      'Global temperatures rose by 1.5 degrees, forcing wildlife to migrate northward.',
  },
  {
    id: 'grammar-3',
    name: 'Non-defining Relative Clause with Quantifier/Preposition ("whose")',
    category: 'Complex Relative Clauses',
    formula: 'Noun Phrase, + [whose + Noun Phrase] + [Verb Phrase], + ...',
    passageExample:
      '...Britain\'s tiniest butterfly, the dainty Small Blue, whose colonies are up to a hundred strong, some develop into butterflies early in spring...',
    paragraphRef: 6,
    explanation:
      'The relative pronoun "whose" establishes possession and qualitative description of the antecedent ("Small Blue"), accompanied by an idiomatic strength quantifier ("up to a hundred strong").',
    explanationVi:
      'Đại từ quan hệ "whose" biểu thị tính sở hữu cho danh từ đứng trước ("Small Blue"), kết hợp cùng cấu trúc chỉ số lượng cá thể ("up to a hundred strong" = lên đến cả trăm cá thể).',
    ieltsApplication:
      'Enables complex qualification of scientific subjects in both Reading comprehension and academic descriptions.',
    ieltsApplicationVi:
      'Giúp bổ nghĩa chi tiết cho các thuật ngữ và đối tượng khoa học trong văn bản học thuật.',
    practiceExample:
      'The Siberian tiger, whose wild populations now number fewer than six hundred, remains critically threatened.',
  },
  {
    id: 'grammar-4',
    name: 'Parenthetical Concessive Clause ("while undoubtedly not...")',
    category: 'Nuanced Qualification & Concession',
    formula: 'Subject + Verb + [that Noun], + while [adverb] not [sole cause/factor], + [modal + have + V3]',
    passageExample:
      'This suggests that climate change, while undoubtedly not the sole cause, might have played a part in the downfall of this species.',
    paragraphRef: 7,
    explanation:
      'This parenthetical structure allows the researcher to maintain scientific balance: acknowledging that climate change is not the only factor, while still arguing that it contributed significantly.',
    explanationVi:
      'Mệnh đề nhượng bộ kẹp giữa hai dấu phẩy ("while undoubtedly not the sole cause") giúp lập luận học thuật khách quan: thừa nhận biến đổi khí hậu không phải nguyên nhân duy nhất, nhưng vẫn khẳng định vai trò đáng kể của nó.',
    ieltsApplication:
      'High-band hedging and concession in IELTS Task 2 essays (avoiding over-generalization and demonstrating critical thinking).',
    ieltsApplicationVi:
      'Tuyệt chiêu tránh khẳng định tuyệt đối (hedging) giúp đạt điểm cao tiêu chí Task Response trong IELTS Writing.',
    practiceExample:
      'Urbanization, while certainly not the only driver, has accelerated regional deforestation.',
  },
  {
    id: 'grammar-5',
    name: 'Contrastive Adverbial Fronting with Prepositional Modifiers',
    category: 'Cohesive Paragraph Transitions',
    formula: '[Prepositional Phrase / Adverbial of Degree], + [Subject] + [Verb]...',
    passageExample:
      'More immediately, conservationists can arm themselves with all this knowledge to spot the warning signs of species that may be at risk.',
    paragraphRef: 9,
    explanation:
      'Fronting comparative time adverbials like "More immediately" shifts the analytical focus from long-term trends to immediate practical intervention, creating a smooth transition.',
    explanationVi:
      'Đưa trạng từ thời gian so sánh "More immediately" (Xét về khía cạnh trước mắt / cấp bách hơn) lên đầu câu giúp chuyển mạch tự nhiên từ các phân tích lý thuyết dài hạn sang hành động thực tiễn.',
    ieltsApplication:
      'Significantly boosts Coherence & Cohesion score by signaling logical shift between paragraphs.',
    ieltsApplicationVi:
      'Nâng cao điểm Coherence & Cohesion khi liên kết các đoạn thân bài giải pháp hoặc tác động.',
    practiceExample:
      'More urgently, local authorities must enforce strict conservation laws to safeguard vulnerable habitats.',
  },
];

export const CONSOLIDATION_PARAPHRASES: ParaphrasePair[] = [
  {
    id: 'para-1',
    originalText: 'populations of around two thirds of butterfly species have declined in Britain over the past 40 years.',
    paraphrasedText: 'Forty years ago, there were fewer butterflies in Britain than at present. (FALSE: there were more)',
    technique: 'Temporal Direction & Trend Inversion',
    techniqueVi: 'Đảo ngược chiều hướng thời gian và xu hướng suy giảm',
    explanation:
      'If numbers have declined over the past 40 years, the historical baseline was higher, not lower.',
    explanationVi:
      'Nếu số lượng giảm sút trong 40 năm qua thì 40 năm trước số lượng phải cao hơn chứ không thể thấp hơn (fewer).',
    paragraphRef: 1,
  },
  {
    id: 'para-2',
    originalText: 'consume vast quantities of plant material, and in turn act as prey for birds as well as bats and other small mammals.',
    paraphrasedText: 'Caterpillars are eaten by a number of different predators. (TRUE)',
    technique: 'Prey/Predator Converseness & Generalization',
    techniqueVi: 'Chuyển đổi cặp từ quan hệ đối ngẫu con mồi - kẻ săn mồi',
    explanation:
      '"Act as prey for birds, bats, and mammals" directly equates to being eaten by various predators.',
    explanationVi:
      '"Làm con mồi cho chim, dơi và thú nhỏ" đồng nghĩa hoàn toàn với việc bị nhiều loài săn mồi ăn thịt.',
    paragraphRef: 1,
  },
  {
    id: 'para-3',
    originalText: 'changing the time of year at which they are active and reproduce. Scientists refer to the timing of such lifecycle events as phenology...',
    paraphrasedText: 'alter the location of a lifecycle event. (FALSE: timing vs location)',
    technique: 'Conceptual Substitution (Time replaced with Space)',
    techniqueVi: 'Thay thế khái niệm thời gian bằng không gian để tạo bẫy',
    explanation:
      'The passage specifies "time of year", whereas the test prompt replaces it with "location".',
    explanationVi:
      'Bài đọc ghi rõ là thay đổi "thời điểm trong năm" (timing), trong khi câu hỏi đổi thành "địa điểm" (location).',
    paragraphRef: 2,
  },
  {
    id: 'para-4',
    originalText: 'species have advanced by between three days and a week on average, to keep in line with cooler temperatures.',
    paraphrasedText: 'Some species of butterfly have a reduced lifespan. (NOT GIVEN)',
    technique: 'Scope Shift (Emergence Timing vs Lifespan Duration)',
    techniqueVi: 'Đánh tráo phạm vi: thời điểm xuất hiện vs thời gian sống của một cá thể',
    explanation:
      'Advancing calendar emergence dates does not equate to a shorter biological life duration.',
    explanationVi:
      'Xuất hiện sớm hơn vài ngày trên lịch không có nghĩa là tuổi thọ (lifespan) của một con bướm bị ngắn lại.',
    paragraphRef: 3,
  },
  {
    id: 'para-5',
    originalText: 'Or are these populations under stress, being dragged along unwillingly...? The answer is still unknown...',
    paraphrasedText: 'There is a clear reason for the adaptations... (FALSE: unknown vs clear)',
    technique: 'Epistemic Antonymy (Unknown vs Clear)',
    techniqueVi: 'Trái nghĩa về mặt nhận thức (Chưa rõ vs Đã có lý do rõ ràng)',
    explanation:
      '"The answer is still unknown" contradicts the assertion that there is a clear, established reason.',
    explanationVi:
      '"Câu trả lời vẫn chưa được biết" trực tiếp mâu thuẫn với khẳng định "đã có lý do rõ ràng".',
    paragraphRef: 3,
  },
  {
    id: 'para-6',
    originalText: 'records that had been submitted by butterfly enthusiasts - people who spend their free time observing...',
    paraphrasedText: 'the work of amateur butterfly watchers. (TRUE)',
    technique: 'Definitional Paraphrase (Free-time observers = Amateurs)',
    techniqueVi: 'Định nghĩa tương đương: người quan sát trong thời gian rảnh = người nghiệp dư',
    explanation:
      'Enthusiasts observing wildlife in their leisure time are literally amateur observers.',
    explanationVi:
      'Những người đam mê quan sát trong thời gian rảnh rỗi chính là những người theo dõi nghiệp dư.',
    paragraphRef: 4,
  },
  {
    id: 'para-7',
    originalText: 'the dainty Small Blue, whose colonies are up to a hundred strong...',
    paraphrasedText: 'The Small Blue • lives in large [colonies]',
    technique: 'Quantifier Transformation ("up to a hundred strong" = "large")',
    techniqueVi: 'Chuyển đổi định lượng cụ thể thành tính từ khái quát',
    explanation:
      '"Colonies up to a hundred strong" translates to living in large colonies.',
    explanationVi:
      '"Quần tụ lên đến cả trăm cá thể" chính là sống thành những bầy đàn lớn (large colonies).',
    paragraphRef: 6,
  },
  {
    id: 'para-8',
    originalText: 'some develop into butterflies early in spring, allowing their summer generations...',
    paraphrasedText: 'The Small Blue • first appears at the start of [spring]',
    technique: 'Synonymous Phrasing ("early in" = "at the start of")',
    techniqueVi: 'Cụm từ đồng nghĩa: đầu mùa = tại thời điểm bắt đầu',
    explanation:
      '"Early in spring" directly matches "at the start of spring".',
    explanationVi:
      '"Early in spring" tương ứng chuẩn xác với "at the start of spring".',
    paragraphRef: 6,
  },
  {
    id: 'para-9',
    originalText: 'often described as Britain\'s most endangered butterfly...',
    paraphrasedText: 'The High Brown Fritillary • is considered to be more [endangered] than other species',
    technique: 'Superlative to Comparative Paraphrase',
    techniqueVi: 'Chuyển đổi từ so sánh nhất sang so sánh hơn',
    explanation:
      'Being the "most endangered" butterfly means it is more endangered than any other butterfly species.',
    explanationVi:
      'Là loài bướm "nguy cấp nhất" đồng nghĩa với việc nó nguy cấp hơn các loài khác.',
    paragraphRef: 7,
  },
  {
    id: 'para-10',
    originalText: 'specialise in very specific habitat types ... found only in coppiced woodland and limestone pavement habitats.',
    paraphrasedText: 'The High Brown Fritillary • its caterpillars occupy a limited range of [habitat/habitats]',
    technique: 'Collocational Pairing ("occupy" requires a place noun)',
    techniqueVi: 'Kết hợp từ ngữ tương thích: động từ "occupy" đi cùng danh từ môi trường sống',
    explanation:
      '"Occupy a limited range of" pairs syntactically with habitat/habitats, not diet.',
    explanationVi:
      '"Occupy a limited range of" đòi hỏi một từ chỉ môi trường sống (habitat), không thể điền diet.',
    paragraphRef: 7,
  },
  {
    id: 'para-11',
    originalText: 'show the capacity, in continental Europe, to add a second generation in years that are sufficiently warm.',
    paraphrasedText: 'The Silver-studded Blue • is already able to reproduce twice a year in warm areas of [Europe]',
    technique: 'Lexical Condensation to ONE WORD ONLY',
    techniqueVi: 'Rút gọn thành đúng 1 từ tuân thủ yêu cầu đề bài',
    explanation:
      '"Add a second generation" = reproduce twice; "continental Europe" is condensed to "Europe" for the 1-word limit.',
    explanationVi:
      '"Add a second generation" = sinh sản 2 lần; rút ngắn "continental Europe" thành "Europe" để đúng 1 từ.',
    paragraphRef: 8,
  },
  {
    id: 'para-12',
    originalText: 'The White Admiral of southern England, a much sought-after butterfly...',
    paraphrasedText: 'The White Admiral • is found in [southern] areas of England',
    technique: 'Adjectival Extraction',
    techniqueVi: 'Trích xuất tính từ chỉ vị trí địa lý',
    explanation:
      '"Southern England" decomposes into "southern areas of England".',
    explanationVi:
      '"Southern England" tương đương với "southern areas of England".',
    paragraphRef: 9,
  },
  {
    id: 'para-13',
    originalText: 'This may be because the caterpillar exists solely on a diet of a plant called honeysuckle.',
    paraphrasedText: 'The White Admiral • both climate change and the [diet] of the caterpillar are possible reasons for decline',
    technique: 'Prepositional Inversion ("exists solely on a diet of" -> "diet of the caterpillar")',
    techniqueVi: 'Chuyển đổi cấu trúc danh từ hóa đi kèm giới từ "of"',
    explanation:
      '"Exists on a diet" matches "the diet of the caterpillar".',
    explanationVi:
      'Sống nhờ một chế độ ăn tương ứng với cụm "chế độ ăn của sâu bướm" (the diet of the caterpillar).',
    paragraphRef: 9,
  },
];

export const MATCHING_TASKS: MatchingTaskItem[] = [
  {
    id: 'match-1',
    term: 'Phenology',
    definition: 'The scientific study of the timing of cyclic biological events in animal and plant life.',
    definitionVi: 'Khoa học nghiên cứu thời điểm diễn ra các sự kiện vòng đời định kỳ theo mùa của sinh vật.',
    context: "Scientists refer to the timing of such lifecycle events as 'phenology'...",
  },
  {
    id: 'match-2',
    term: 'Knock-on effect',
    definition: 'An unintended secondary consequence triggered indirectly by an initial disruption.',
    definitionVi: 'Hệ quả gián tiếp theo phản ứng dây chuyền nảy sinh sau một biến cố ban đầu.',
    context: '...it might have unpredictable knock-on effects for other species in the ecosystem.',
  },
  {
    id: 'match-3',
    term: 'Abundance',
    definition: 'The statistical measure of population size or quantity present in a geographic survey.',
    definitionVi: 'Chỉ số đo lường số lượng cá thể hoặc độ phong phú trong một cuộc điều tra địa lý.',
    context: 'They then estimated the abundance and distribution of each species across this time...',
  },
  {
    id: 'match-4',
    term: 'Endangered',
    definition: 'Facing a high probability of total extinction in the near future.',
    definitionVi: 'Đối mặt với nguy cơ tuyệt chủng hoàn toàn trong tương lai gần.',
    context: "The beautiful High Brown Fritillary, often described as Britain's most endangered butterfly...",
  },
  {
    id: 'match-5',
    term: 'Coppiced woodland',
    definition: 'Forest areas regularly trimmed back to ground level to foster dense new shoot regeneration.',
    definitionVi: 'Khu rừng được định kỳ chặt sát gốc để kích thích cây đâm chồi nhánh mới.',
    context: 'It is found only in coppiced woodland and limestone pavement habitats.',
  },
  {
    id: 'match-6',
    term: 'Solely',
    definition: 'Exclusively and entirely; not depending on any other source or alternative.',
    definitionVi: 'Độc nhất và hoàn toàn; không phụ thuộc vào bất kỳ nguồn hay phương án nào khác.',
    context: '...exists solely on a diet of a plant called honeysuckle.',
  },
];

export const GAP_FILL_TASKS: GapFillTaskItem[] = [
  {
    id: 'gap-1',
    sentence: 'Rising spring temperatures have caused numerous migratory birds and butterflies to advance their [_____].',
    targetWord: 'phenology',
    options: ['phenology', 'lifespan', 'distribution', 'predators'],
    hint: 'Refers to the seasonal calendar or timing of biological lifecycle occurrences.',
    hintVi: 'Chỉ lịch trình theo mùa hoặc thời điểm diễn ra các sự kiện vòng đời sinh học.',
    explanation:
      '"Phenology" refers specifically to the timing of recurring seasonal biological milestones.',
    explanationVi:
      '"Phenology" chỉ thời gian tính của các mốc sự kiện vòng đời tự nhiên theo mùa.',
  },
  {
    id: 'gap-2',
    sentence: 'If primary pollinators disappear, it will trigger catastrophic [_____] throughout the agricultural sector.',
    targetWord: 'knock-on effects',
    options: ['knock-on effects', 'abundance', 'habitats', 'colonies'],
    hint: 'A secondary, ripple consequence following a primary disruption.',
    hintVi: 'Hệ quả gián tiếp dây chuyền kéo theo sau một sự xáo trộn ban đầu.',
    explanation:
      '"Knock-on effects" describes ripple repercussions through an interconnected system.',
    explanationVi:
      '"Knock-on effects" diễn tả các tác động dây chuyền lan tỏa qua một hệ thống liên kết.',
  },
  {
    id: 'gap-3',
    sentence: 'Unlike generalist insects, this rare moth specializes in a single [_____] type and cannot survive elsewhere.',
    targetWord: 'habitat',
    options: ['habitat', 'predator', 'phenology', 'abundance'],
    hint: 'The physical natural environment where a species naturally dwells.',
    hintVi: 'Môi trường sống tự nhiên nơi một loài sinh vật cư ngụ.',
    explanation:
      '"Habitat" describes the specific natural ecological environment required for survival.',
    explanationVi:
      '"Habitat" là môi trường sống cụ thể cần thiết cho sự sinh tồn của sinh vật.',
  },
  {
    id: 'gap-4',
    sentence: 'The research project depended heavily on observations logged by amateur butterfly [_____].',
    targetWord: 'enthusiasts',
    options: ['enthusiasts', 'predators', 'colonies', 'generations'],
    hint: 'Passionate individuals who spend their free time pursuing an interest.',
    hintVi: 'Những người say mê dành thời gian rảnh rỗi theo đuổi một sở thích.',
    explanation:
      '"Enthusiasts" denotes passionate individuals engaging in hobby or citizen science observations.',
    explanationVi:
      '"Enthusiasts" chỉ những người đam mê tham gia quan sát khoa học cộng đồng.',
  },
  {
    id: 'gap-5',
    sentence: 'In warmer European regions, certain butterflies can complete a second [_____] before winter arrives.',
    targetWord: 'generation',
    options: ['generation', 'phenology', 'predator', 'woodland'],
    hint: 'A single cycle of offspring developing from eggs to adults.',
    hintVi: 'Một thế hệ con non phát triển từ trứng thành bướm trưởng thành.',
    explanation:
      '"Generation" denotes a single reproductive cycle of descendants produced in one season.',
    explanationVi:
      '"Generation" chỉ một thế hệ sinh sản mới ra đời trong cùng một chu kỳ.',
  },
];

export const REFERENCE_TASKS: ReferenceTaskItem[] = [
  {
    id: 'ref-1',
    question: 'In paragraph 1, what does the pronoun phrase "these insects" refer to?',
    quote:
      'Butterfly eggs develop into caterpillars and these insects, which are the second stage in a new butterfly\'s lifecycle, consume vast quantities of plant material...',
    paragraphRef: 1,
    options: ['butterfly eggs', 'caterpillars', 'birds and bats', 'conservationists'],
    correctIndex: 1,
    explanation:
      '"These insects" directly follows "Butterfly eggs develop into caterpillars", identifying caterpillars as the subject consuming plant material.',
    explanationVi:
      '"These insects" đứng ngay sau "Butterfly eggs develop into caterpillars", chỉ định sâu bướm chính là loài tiêu thụ thực vật.',
  },
  {
    id: 'ref-2',
    question: 'In paragraph 3, what does "These advances" refer to?',
    quote:
      "These advances have been observed already in a wide range of butterflies - indeed, most species are advancing their phenology to some extent.",
    paragraphRef: 3,
    options: [
      'Technological tools developed by scientists',
      'Butterflies starting lifecycle events earlier in the year',
      'The migration of butterflies to southern England',
      'Increases in human volunteer records',
    ],
    correctIndex: 1,
    explanation:
      '"These advances" refers back to the end of paragraph 2: species starting lifecycle events earlier in the year (advancing their phenology).',
    explanationVi:
      '"These advances" liên chiếu lại cuối đoạn 2: việc sinh vật bắt đầu các sự kiện vòng đời sớm hơn trong năm (advancing phenology).',
  },
  {
    id: 'ref-3',
    question: 'In paragraph 4, what does the phrase "people who spend their free time observing..." define?',
    quote:
      '...records that had been submitted by butterfly enthusiasts - people who spend their free time observing the activities of different species.',
    paragraphRef: 4,
    options: [
      'Professional government researchers',
      'Butterfly enthusiasts (amateur citizen observers)',
      'Park rangers managing coppiced woodlands',
      'Commercial caterpillar breeders',
    ],
    correctIndex: 1,
    explanation:
      'The dash introduces an appositive definition identifying "butterfly enthusiasts" as amateur nature observers.',
    explanationVi:
      'Dấu gạch ngang mở ra một định ngữ giải thích "butterfly enthusiasts" là những người quan sát nghiệp dư trong cộng đồng.',
  },
  {
    id: 'ref-4',
    question: 'In paragraph 7, what does "this group" refer to in the text?',
    quote:
      'The beautiful High Brown Fritillary, often described as Britain\'s most endangered butterfly, is in this group.',
    paragraphRef: 7,
    options: [
      'Species with flexible multi-generation lifecycles',
      'Species restricted to a single reproductive cycle per year with specialized habitat requirements',
      'Butterflies that thrive in continental Europe',
      'Insects that consume honeysuckle plants',
    ],
    correctIndex: 1,
    explanation:
      '"This group" refers to single-generation species with inflexible lifecycles that specialize in specific habitat types.',
    explanationVi:
      '"This group" liên chiếu đến nhóm các loài bướm chỉ sinh sản một thế hệ mỗi năm và có yêu cầu môi trường sống chuyên biệt.',
  },
  {
    id: 'ref-5',
    question: 'In paragraph 9, what does "This" refer to in the sentence "This may be because the caterpillar exists solely on..."?',
    quote:
      'The White Admiral of southern England ... has shown a considerable decline in the past 20 years. This may be because...',
    paragraphRef: 9,
    options: [
      'The increase in numbers from the 1920s',
      'The considerable decline in the past 20 years',
      'The expansion into northern habitats',
      'The collection by enthusiasts',
    ],
    correctIndex: 1,
    explanation:
      '"This" refers to the White Admiral\'s considerable population decline over the preceding two decades.',
    explanationVi:
      '"This" thay thế cho hiện tượng sụt giảm số lượng đáng kể của loài White Admiral trong suốt 20 năm qua.',
  },
];

export const TRANSFORMATION_TASKS: TransformationTaskItem[] = [
  {
    id: 'trans-1',
    original:
      'Conservationists can only hope to halt the decline if they understand why butterfly populations are shrinking.',
    targetGrammar: 'Negative Inversion with "Only by"',
    prompt: 'Rewrite the sentence starting with "Only by understanding why butterfly populations are shrinking..."',
    options: [
      'Only by understanding why butterfly populations are shrinking conservationists can hope to halt the decline.',
      'Only by understanding why butterfly populations are shrinking can conservationists hope to halt the decline.',
      'Only by understanding why butterfly populations are shrinking do conservationists hoping to halt the decline.',
      'Only by understanding why butterfly populations are shrinking is conservationists able to halt the decline.',
    ],
    correctIndex: 1,
    explanation:
      'When "Only by..." begins a sentence, the auxiliary verb ("can") must precede the subject ("conservationists"): "can conservationists hope...".',
    explanationVi:
      'Khi cụm "Only by..." đứng đầu câu, trợ động từ ("can") bắt buộc phải đảo lên trước chủ ngữ ("conservationists").',
  },
  {
    id: 'trans-2',
    original:
      'Summer temperatures are rising rapidly, and this development forces butterflies to adjust their seasonal schedules.',
    targetGrammar: 'Participle Clause of Result',
    prompt: 'Combine into a single sentence using a present participle clause:',
    options: [
      'Summer temperatures are rising rapidly, forcing butterflies to adjust their seasonal schedules.',
      'Summer temperatures are rising rapidly, and forced butterflies to adjust their seasonal schedules.',
      'Summer temperatures are rising rapidly which forcing butterflies to adjust their seasonal schedules.',
      'Summer temperatures are rising rapidly because of forcing butterflies to adjust their seasonal schedules.',
    ],
    correctIndex: 0,
    explanation:
      'A comma followed by a present participle ("forcing butterflies...") creates a concise, high-band causal result clause.',
    explanationVi:
      'Dấu phẩy kết hợp phân từ hiện tại (comma + forcing...) tạo nên mệnh đề kết quả rút gọn chuẩn mực học thuật.',
  },
  {
    id: 'trans-3',
    original:
      'Although climate change is certainly not the only cause, it has played a major role in the extinction of local butterflies.',
    targetGrammar: 'Parenthetical Concessive Clause',
    prompt: 'Transform using a parenthetical "while" clause:',
    options: [
      'Climate change, while certainly not the only cause, has played a major role in the extinction of local butterflies.',
      'While climate change is not only cause, but it has played a major role in local butterfly extinction.',
      'Climate change has played a major role while it is not the only cause in local butterfly extinction.',
      'Although climate change while not only cause, has played a major role in local butterfly extinction.',
    ],
    correctIndex: 0,
    explanation:
      'Inserting ", while certainly not the only cause," smoothly embeds nuanced concession between the subject and verb phrase.',
    explanationVi:
      'Chèn mệnh đề nhượng bộ kẹp giữa hai dấu phẩy ", while certainly not the only cause," giúp câu văn mềm mại và lập luận chặt chẽ.',
  },
  {
    id: 'trans-4',
    original:
      'The Small Blue is Britain\'s smallest butterfly. Its colonies often contain up to one hundred individuals.',
    targetGrammar: 'Relative Clause with "whose"',
    prompt: 'Combine into one compound sentence using the relative pronoun "whose":',
    options: [
      'The Small Blue is Britain\'s smallest butterfly, which colonies often contain up to one hundred individuals.',
      'The Small Blue, Britain\'s smallest butterfly, whose colonies are up to a hundred strong, is thriving in spring.',
      'The Small Blue whose its colonies contain up to one hundred individuals is Britain\'s smallest butterfly.',
      'The Small Blue of who colonies are up to a hundred strong is Britain\'s smallest butterfly.',
    ],
    correctIndex: 1,
    explanation:
      '"whose colonies are up to a hundred strong" uses the possessive relative pronoun "whose" correctly without redundancy.',
    explanationVi:
      '"whose colonies are up to a hundred strong" sử dụng đại từ quan hệ sở hữu "whose" chính xác mà không bị lặp từ thừa.',
  },
];
