import { 
  ParagraphData, 
  QuestionItem, 
  TipStrip, 
  ReviewItem, 
  ActionPlanReminder,
  StrategyExtractItem,
  ErrorAnalysisItem
} from '../types';

export const PASSAGE_TITLE = "The impact of climate change on butterflies in Britain";
export const PASSAGE_SUBTITLE =
  "Examining how rising temperatures and shifting phenology affect UK butterfly species with single versus multiple reproductive cycles";

export const REVIEW_QUESTIONS: ReviewItem[] = [
  {
    id: 1,
    question: 'Does each task have the same number of questions?',
    questionVi: 'Mỗi dạng bài (task) có cùng một số lượng câu hỏi không?',
    answer: 'No, not necessarily. Here Task 1 has 6 True/False/Not Given questions, and Task 2 has 7 Note Completion questions.',
    answerVi: 'Không, không nhất thiết. Ở bài này, Phần 1 có 6 câu True/False/Not Given và Phần 2 có 7 câu Hoàn thành ghi chú (Note Completion).',
  },
  {
    id: 2,
    question: 'Are the questions in the same order as the information you need in the text?',
    questionVi: 'Các câu hỏi có theo cùng thứ tự thông tin cần tìm trong bài đọc không?',
    answer: 'Yes. In both True/False/Not Given and Note Completion tasks, questions follow the chronological order of the text.',
    answerVi: 'Có. Trong cả dạng True/False/Not Given lẫn Hoàn thành ghi chú, các câu hỏi luôn xuất hiện theo đúng trình tự thời gian của bài đọc.',
  },
  {
    id: 3,
    question: 'Can you use your own general knowledge or must the answer come from the text?',
    questionVi: 'Bạn có thể dùng kiến thức chung của mình hay câu trả lời phải lấy từ bài đọc?',
    answer:
      'Even though you think you know the answer from general biology, you must always check the information provided by the writer. You will only get a mark if you answer according to the information in the text.',
    answerVi:
      'Ngay cả khi bạn nghĩ mình đã biết câu trả lời từ kiến thức sinh học thường thức, bạn vẫn luôn phải kiểm tra thông tin do tác giả cung cấp. Bạn chỉ được chấm điểm nếu trả lời theo đúng thông tin trong bài đọc.',
  },
  {
    id: 4,
    question: 'What are the word limit rules for note completion tasks?',
    questionVi: 'Quy định về giới hạn từ cho dạng bài hoàn thành ghi chú là gì?',
    answer:
      'Always follow the rubric strictly: "Choose ONE WORD ONLY from the passage for each answer." Writing more than one word will receive zero marks.',
    answerVi:
      'Luôn tuân thủ nghiêm ngặt yêu cầu đề bài: "CHỌN CHỈ MỘT TỪ (ONE WORD ONLY) từ bài đọc cho mỗi câu trả lời." Viết nhiều hơn một từ sẽ bị 0 điểm.',
  },
];

export const STRATEGY_EXTRACTS: StrategyExtractItem[] = [
  {
    id: 'extract-a',
    letter: 'A',
    text: 'According to conservationists, populations of around two thirds of butterfly species have declined in Britain over the past 40 years.',
    statement: 'Forty years ago, there were fewer butterflies in Britain than at present.',
    strategyTitle: 'Direction of change (Trends)',
    strategyDesc: 'Check whether a decline means numbers were lower or higher in the past compared to today.',
    strategyDescVi: 'Kiểm tra xem sự suy giảm (decline) có nghĩa là số lượng trong quá khứ thấp hơn hay cao hơn so với hiện tại.',
    officialAnswer: 'FALSE',
    explanation:
      "FALSE: If populations have declined over 40 years, it means there were more butterflies in the past, not fewer. The statement contradicts the passage.",
    explanationVi:
      'FALSE: Nếu số lượng đã suy giảm trong 40 năm qua, điều đó có nghĩa là 40 năm trước số lượng bướm nhiều hơn hiện tại chứ không phải ít hơn (fewer).',
  },
  {
    id: 'extract-b',
    letter: 'B',
    text: 'Butterfly eggs develop into caterpillars and these insects ... act as prey for birds as well as bats and other small mammals.',
    statement: 'Caterpillars are eaten by a number of different predators.',
    strategyTitle: 'Paraphrasing predators & prey',
    strategyDesc: 'Recognise that "act as prey for birds as well as bats and other small mammals" means being eaten by various predators.',
    strategyDescVi: 'Nhận biết "act as prey for" (làm con mồi cho chim, dơi, thú nhỏ) đồng nghĩa với việc bị nhiều loài săn mồi ăn thịt.',
    officialAnswer: 'TRUE',
    explanation:
      "TRUE: The text lists birds, bats, and other small mammals as animals for which caterpillars act as prey. These are a number of different predators.",
    explanationVi:
      'TRUE: Đoạn trích liệt kê chim, dơi và các động vật có vú nhỏ là những loài mà sâu bướm làm con mồi. Chúng đại diện cho nhiều loài săn mồi khác nhau.',
  },
  {
    id: 'extract-c',
    letter: 'C',
    text: "One of the main ways in which species are ensuring conditions suit them is by changing the time of year at which they are active and reproduce. Scientists refer to the timing of such lifecycle events as 'phenology'...",
    statement: "'Phenology' is a term used to describe a creature's ability to alter the location of a lifecycle event.",
    strategyTitle: 'Time versus Location distinctions',
    strategyDesc: 'Carefully compare the definition: does it mention the time of year or the physical geographical location?',
    strategyDescVi: 'So sánh cẩn thận định nghĩa: đoạn văn nói về thời điểm trong năm (time of year) hay địa điểm địa lý (location)?',
    officialAnswer: 'FALSE',
    explanation:
      "FALSE: Phenology refers to changing the timing (time of year) of lifecycle events, not their geographical location.",
    explanationVi:
      'FALSE: Phenology là việc thay đổi thời gian/thời điểm trong năm diễn ra các sự kiện vòng đời chứ không phải thay đổi địa điểm (location).',
  },
  {
    id: 'extract-d',
    letter: 'D',
    text: 'In Britain, as the average spring temperature has increased by roughly 0.5 °C over the past 20 years, species have advanced by between three days and a week on average...',
    statement: 'Some species of butterfly have a reduced lifespan due to spring temperature increases.',
    strategyTitle: 'Distinguishing emergence from lifespan',
    strategyDesc: 'Look for any mention of the length of life (lifespan) versus the date/timing of emergence.',
    strategyDescVi: 'Tìm xem có thông tin nào về độ dài tuổi thọ (lifespan) hay chỉ nói về thời điểm xuất hiện sớm hơn.',
    officialAnswer: 'NOT GIVEN',
    explanation:
      "NOT GIVEN: The text mentions that species advance their emergence timing by 3 to 7 days, but says nothing about their lifespan.",
    explanationVi:
      'NOT GIVEN: Bài đọc nói các loài xuất hiện sớm hơn từ 3 đến 7 ngày, nhưng hoàn toàn không nói tuổi thọ của chúng bị ngắn lại hay không.',
  },
  {
    id: 'extract-e',
    letter: 'E',
    text: 'Is this a sign that butterflies are well equipped to cope with climate change, and readily adjust to new temperatures? Or are these populations under stress...? The answer is still unknown...',
    statement: 'There is a clear reason for the adaptations that butterflies are making to climate change.',
    strategyTitle: 'Identifying certainty versus uncertainty',
    strategyDesc: 'Look for phrases that indicate whether scientists are certain or if questions remain unanswered.',
    strategyDescVi: 'Tìm các cụm từ thể hiện sự chắc chắn hoặc chưa có lời giải đáp (The answer is still unknown).',
    officialAnswer: 'FALSE',
    explanation:
      "FALSE: The text explicitly states that 'The answer is still unknown', contradicting the idea that there is a clear reason.",
    explanationVi:
      'FALSE: Đoạn trích nêu rõ "The answer is still unknown" (Câu trả lời vẫn chưa được biết), trái ngược với khẳng định có lý do rõ ràng.',
  },
  {
    id: 'extract-f',
    letter: 'F',
    text: 'the researchers pulled together data from millions of records that had been submitted by butterfly enthusiasts - people who spend their free time observing the activities of different species.',
    statement: 'The data used in the study was taken from the work of amateur butterfly watchers.',
    strategyTitle: 'Paraphrasing enthusiast & free time as amateur',
    strategyDesc: 'Identify how non-professional observers ("spend their free time") matches "amateur watchers".',
    strategyDescVi: 'Nhận diện việc quan sát trong thời gian rảnh rỗi của những người đam mê tương ứng với người quan sát nghiệp dư (amateur).',
    officialAnswer: 'TRUE',
    explanation:
      "TRUE: People who spend their free time observing species as enthusiasts are by definition amateur butterfly watchers.",
    explanationVi:
      'TRUE: Những người dành thời gian rảnh quan sát theo sở thích chính là những người theo dõi nghiệp dư (amateur butterfly watchers).',
  },
];

export const ERROR_ANALYSIS_ITEMS: ErrorAnalysisItem[] = [
  {
    id: 1,
    questionPrompt: 'is already able to reproduce twice a year in warm areas of 11 [continental Europe]',
    studentAnswer: 'continental Europe',
    rubricRule: 'Choose ONE WORD ONLY from the passage for each answer.',
    matchedReasonId: 'C',
    explanation:
      "The student failed to respect the rubric instruction 'ONE WORD ONLY'. The answer should be simply 'Europe'.",
    explanationVi:
      "Học sinh không tuân thủ quy định 'CHỈ MỘT TỪ (ONE WORD ONLY)'. Đáp án đúng chỉ gồm 1 từ: 'Europe'.",
  },
  {
    id: 2,
    questionPrompt: 'first appears at the start of 8 [year]',
    studentAnswer: 'year',
    rubricRule: 'Choose ONE WORD ONLY from the passage for each answer.',
    matchedReasonId: 'B',
    explanation:
      "'Year' is grammatically incorrect as it needs to be preceded by 'the' ('the start of the year'). The correct answer is 'spring'.",
    explanationVi:
      "'Year' bị sai về mặt ngữ pháp vì nếu điền 'year' thì phải có 'the' ('the start of the year'). Từ đúng trong bài là 'spring'.",
  },
  {
    id: 3,
    questionPrompt: 'its caterpillars occupy a limited range of 10 [diet]',
    studentAnswer: 'diet',
    rubricRule: 'Choose ONE WORD ONLY from the passage for each answer.',
    matchedReasonId: 'F',
    explanation:
      "The verb 'occupy' requires a noun referring to a physical place or environment, not what they eat. The answer is 'habitat' or 'habitats'.",
    explanationVi:
      "Động từ 'occupy' (cư ngụ, chiếm giữ) đòi hỏi một từ chỉ địa điểm/môi trường sống chứ không thể là chế độ ăn. Đáp án phải là 'habitat' hoặc 'habitats'.",
  },
  {
    id: 4,
    questionPrompt: 'lives in large 7 [colonie]',
    studentAnswer: 'colonie',
    rubricRule: 'Choose ONE WORD ONLY from the passage for each answer.',
    matchedReasonId: 'B',
    explanation:
      "The student made a spelling error. The word in the passage is the plural form 'colonies'.",
    explanationVi:
      "Học sinh đã sao chép sai chính tả. Từ chính xác trong bài đọc là dạng số nhiều 'colonies'.",
  },
  {
    id: 5,
    questionPrompt: 'is already able to reproduce twice a year in warm areas of 11 [Britain]',
    studentAnswer: 'Britain',
    rubricRule: 'Choose ONE WORD ONLY from the passage for each answer.',
    matchedReasonId: 'D',
    explanation:
      "The text says this capability exists in 'continental Europe', whereas Britain's species might only switch in the future as the climate warms.",
    explanationVi:
      "Bài đọc cho biết khả năng sinh sản 2 lần một năm đã diễn ra ở lục địa châu Âu ('continental Europe'), còn ở Anh ('Britain') thì chưa.",
  },
  {
    id: 6,
    questionPrompt: 'both climate change and the 13 [plant] of the caterpillar are possible reasons for decline',
    studentAnswer: 'plant',
    rubricRule: 'Choose ONE WORD ONLY from the passage for each answer.',
    matchedReasonId: 'A',
    explanation:
      "Phrasing 'the plant of the caterpillar' does not make semantic sense in English. The text refers to 'the diet of the caterpillar'.",
    explanationVi:
      "Cụm 'the plant of the caterpillar' không có nghĩa hợp lý. Bài đọc nói sâu bướm chỉ tồn tại nhờ một khẩu phần ăn ('diet') duy nhất.",
  },
];

export const ERROR_ANALYSIS_REASONS = [
  {
    id: 'A',
    text: "This answer doesn't make semantic sense when plugged into the sentence structure.",
    textVi: 'Đáp án này không tạo thành nghĩa hợp lý khi ghép vào cấu trúc câu.',
  },
  {
    id: 'B',
    text: "The student has made a grammatical or spelling error, or missed an essential preposition/article requirement.",
    textVi: 'Học sinh bị lỗi ngữ pháp, chính tả, hoặc thiếu mạo từ/dạng số nhiều cần thiết.',
  },
  {
    id: 'C',
    text: "The answer violates the word limit instruction (e.g. writing two words when 'ONE WORD ONLY' was specified).",
    textVi: 'Đáp án vi phạm giới hạn từ của đề bài (ví dụ viết 2 từ trong khi yêu cầu CHỈ MỘT TỪ).',
  },
  {
    id: 'D',
    text: "The student selected a location/fact that contradicts the passage (e.g. Britain vs continental Europe).",
    textVi: 'Học sinh chọn nhầm địa điểm/dữ kiện trái ngược với bài đọc.',
  },
  {
    id: 'E',
    text: "The student failed to match the singular/plural agreement with surrounding words.",
    textVi: 'Học sinh không phù hợp dạng số ít/số nhiều với ngữ cảnh xung quanh.',
  },
  {
    id: 'F',
    text: "The student found the right topic area but chose the wrong part of speech or conceptual category.",
    textVi: 'Học sinh tìm đúng đoạn nhưng chọn sai loại từ hoặc sai phạm trù ngữ nghĩa.',
  },
];

export const ACTION_PLAN_TFNG: ActionPlanReminder = {
  taskType: 'tfng',
  title: 'Action plan: True / False / Not given',
  titleVi: 'Kế hoạch hành động: Dạng bài True / False / Not Given',
  items: [
    {
      number: 1,
      question: 'Step 1: What should you do first with the passage?',
      questionVi: 'Bước 1: Bạn nên làm gì đầu tiên với bài đọc?',
      answer: 'Quickly skim the passage to understand the topic of each paragraph: intro/decline (P1), phenology concept (P2), temperature advance (P3), citizen data (P4), flexible vs restricted lifecycles (P5-7), future prospects (P8-9).',
      answerVi: 'Đọc lướt nhanh bài đọc để nắm chủ đề từng đoạn: sự suy giảm (P1), khái niệm thời học phenology (P2), thời điểm xuất hiện sớm hơn (P3), dữ liệu cộng đồng (P4), các loài linh hoạt vs hạn chế (P5-7), triển vọng tương lai (P8-9).',
    },
    {
      number: 2,
      question: 'Step 2: How do you locate information for questions 1–6?',
      questionVi: 'Bước 2: Định vị thông tin cho các câu 1–6 như thế nào?',
      answer: 'Questions 1–6 follow chronological order from paragraphs 1 to 4. Look for anchor keywords like "40 years", "caterpillars", "phenology", "spring temperature", "amateur/enthusiasts".',
      answerVi: 'Các câu 1–6 đi theo thứ tự bài đọc từ đoạn 1 đến đoạn 4. Tìm các từ neo như "40 years", "caterpillars", "phenology", "spring temperature", "amateur/enthusiasts".',
    },
    {
      number: 3,
      question: 'Step 3: How do you distinguish FALSE from NOT GIVEN?',
      questionVi: 'Bước 3: Làm sao để phân biệt rạch ròi giữa FALSE và NOT GIVEN?',
      answer: 'A FALSE statement directly contradicts the facts in the text (e.g. populations declined means there were more, not fewer in the past). If a fact is simply not discussed (e.g. lifespan), choose NOT GIVEN.',
      answerVi: 'Câu FALSE phải mâu thuẫn trực tiếp với bài đọc (ví dụ số lượng giảm nghĩa là quá khứ có nhiều hơn chứ không phải ít hơn). Nếu bài đọc hoàn toàn không đề cập đến dữ kiện đó (như tuổi thọ), hãy chọn NOT GIVEN.',
    },
    {
      number: 4,
      question: 'Step 4: How should you handle questions with uncertainties?',
      questionVi: 'Bước 4: Xử lý các câu có yếu tố hoài nghi/chưa chắc chắn ra sao?',
      answer: 'Look for phrases like "The answer is still unknown". If the question claims there is a "clear reason", this directly contradicts the text and must be FALSE.',
      answerVi: 'Tìm những cụm như "The answer is still unknown". Nếu câu hỏi khẳng định có "lý do rõ ràng" (clear reason), điều này mâu thuẫn trực tiếp và đáp án là FALSE.',
    },
    {
      number: 5,
      question: 'Step 5: How do you confirm synonyms like "amateur"?',
      questionVi: 'Bước 5: Xác nhận các từ đồng nghĩa như "amateur" như thế nào?',
      answer: 'Compare the dictionary meaning: "people who spend their free time observing" matches "amateur butterfly watchers" exactly.',
      answerVi: 'So sánh ý nghĩa: "những người dành thời gian rảnh để quan sát" chính là định nghĩa chuẩn của "người theo dõi nghiệp dư" (amateur watchers).',
    },
  ],
};

export const ACTION_PLAN_NOTE: ActionPlanReminder = {
  taskType: 'notes',
  title: 'Task information: Note completion (ONE WORD ONLY)',
  titleVi: 'Kế hoạch hành động: Hoàn thành ghi chú (CHỈ MỘT TỪ)',
  items: [
    {
      number: 1,
      question: 'Step 1: What is the word limit for questions 7–13?',
      questionVi: 'Bước 1: Giới hạn từ cho các câu 7–13 là bao nhiêu?',
      answer: 'Choose ONE WORD ONLY from the passage for each answer. Writing two words like "continental Europe" will lose the mark even if the second word is correct.',
      answerVi: 'Chọn CHỈ MỘT TỪ (ONE WORD ONLY) từ bài đọc. Viết 2 từ như "continental Europe" sẽ bị mất điểm hoàn toàn.',
    },
    {
      number: 2,
      question: 'Step 2: How do the butterfly subheadings guide your reading?',
      questionVi: 'Bước 2: Tiêu đề các loài bướm giúp bạn định vị ra sao?',
      answer: 'Each subheading directs you to a specific paragraph: The Small Blue is in paragraph 6; The High Brown Fritillary is in paragraph 7; The Silver-studded Blue is in paragraph 8; The White Admiral is in paragraph 9.',
      answerVi: 'Mỗi tiêu đề phụ hướng bạn đến đúng đoạn văn: The Small Blue ở đoạn 6; The High Brown Fritillary ở đoạn 7; The Silver-studded Blue ở đoạn 8; The White Admiral ở đoạn 9.',
    },
    {
      number: 3,
      question: 'Step 3: How do you predict the word form required?',
      questionVi: 'Bước 3: Dự đoán dạng từ cần điền như thế nào?',
      answer: 'Q7 needs a plural noun after "large" (colonies); Q8 needs a season/time (spring); Q9 needs an adjective (endangered); Q10 needs a habitat noun (habitat/habitats); Q11 needs a geographic area (Europe); Q12 needs a directional adjective (southern); Q13 needs a noun (diet).',
      answerVi: 'Q7 cần danh từ số nhiều (colonies); Q8 cần mùa/thời gian (spring); Q9 cần tính từ (endangered); Q10 cần danh từ môi trường sống (habitat/habitats); Q11 cần địa danh (Europe); Q12 cần tính từ chỉ hướng (southern); Q13 cần danh từ (diet).',
    },
    {
      number: 4,
      question: 'Step 4: Can you alter the form of the word from the text?',
      questionVi: 'Bước 4: Bạn có được biến đổi từ so với bài đọc không?',
      answer: 'No! You must copy the exact word directly from the passage with 100% accurate spelling.',
      answerVi: 'Tuyệt đối không! Bạn phải sao chép chính xác từng chữ cái trực tiếp từ bài đọc.',
    },
    {
      number: 5,
      question: 'Step 5: How do you check grammatical harmony?',
      questionVi: 'Bước 5: Kiểm tra tính chuẩn xác ngữ pháp sau khi điền ra sao?',
      answer: 'Read the completed note bullet to ensure it flows naturally (e.g. "both climate change and the diet of the caterpillar").',
      answerVi: 'Đọc lại toàn bộ câu ghi chú đã hoàn thiện để đảm bảo câu xuôi nghĩa và đúng ngữ pháp.',
    },
  ],
};

export const ACTION_PLAN_TABLE = ACTION_PLAN_NOTE;

export const TIP_STRIP_PART1: TipStrip = {
  title: 'Exam Tips: Questions 1–6 (True / False / Not Given)',
  questionRange: 'Questions 1–6',
  bullets: [
    'Quickly skim paragraphs 1 to 4 to establish where each fact is discussed.',
    'Notice quantitative statements: "populations of around two thirds ... have declined" means numbers were higher 40 years ago, making Q1 FALSE.',
    'For Q2, check who eats caterpillars: birds, bats, and small mammals act as predators.',
    'Carefully distinguish "time of year" from "location" when evaluating the definition of phenology for Q3.',
    'Check whether the text actually says anything about lifespan (Q4): advancing emergence does not mean living fewer days.',
    'Look out for expressions of scientific doubt: "The answer is still unknown" directly contradicts "there is a clear reason" (Q5).',
    'Amateur watchers (Q6) is paraphrased as people who "spend their free time observing" (butterfly enthusiasts).',
  ],
  bulletsVi: [
    'Đọc lướt nhanh các đoạn 1 đến 4 để xác định vị trí từng dữ kiện.',
    'Chú ý câu nói về số lượng: "quần thể suy giảm trong 40 năm qua" nghĩa là 40 năm trước có nhiều bướm hơn, do đó câu 1 là FALSE.',
    'Với câu 2, kiểm tra loài nào ăn sâu bướm: chim, dơi và động vật có vú nhỏ chính là các loài săn mồi.',
    'Phân biệt rõ "thời điểm trong năm" với "địa điểm" khi kiểm tra định nghĩa phenology ở câu 3.',
    'Kiểm tra xem bài đọc có thực sự nhắc tới tuổi thọ (lifespan) ở câu 4 không: xuất hiện sớm hơn không đồng nghĩa với tuổi thọ ngắn lại.',
    'Chú ý sự hoài nghi khoa học: "The answer is still unknown" mâu thuẫn trực tiếp với khẳng định có lý do rõ ràng (câu 5).',
    'Người theo dõi nghiệp dư (câu 6) được paraphrase từ "dành thời gian rảnh rỗi để quan sát" (những người đam mê bướm).',
  ],
};

export const TIP_STRIP_PART2: TipStrip = {
  title: 'Exam Tips: Questions 7–13 (Note Completion: Butterflies in the UK)',
  questionRange: 'Questions 7–13',
  bullets: [
    'Strict rubric: Choose ONE WORD ONLY from the passage for each answer.',
    'Use the butterfly subheadings to navigate paragraphs 6 to 9 in order.',
    'For Q7: "colonies are up to a hundred strong" -> lives in large colonies.',
    'For Q8: "early in spring" -> first appears at the start of spring ("year" is incorrect as it requires "the").',
    'For Q9: "Britain\'s most endangered butterfly" -> considered to be more endangered than other species.',
    'For Q10: the verb "occupy" requires a place/habitat, so the answer is "habitat" or "habitats", not "diet".',
    'For Q11: write ONE word: "Europe" (not "continental Europe", and not "Britain").',
    'For Q12: "The White Admiral of southern England" -> found in southern areas of England.',
    'For Q13: "exists solely on a diet of..." matches "the diet of the caterpillar".',
  ],
  bulletsVi: [
    'Quy định nghiêm ngặt: CHỌN CHỈ MỘT TỪ (ONE WORD ONLY) từ bài đọc cho mỗi câu trả lời.',
    'Sử dụng tiêu đề các loài bướm để đọc lần lượt các đoạn 6 đến 9.',
    'Câu 7: "colonies are up to a hundred strong" -> lives in large colonies.',
    'Câu 8: "early in spring" -> first appears at the start of spring (không chọn "year" vì thiếu "the").',
    'Câu 9: "Britain\'s most endangered butterfly" -> more endangered than other species.',
    'Câu 10: động từ "occupy" đòi hỏi một từ chỉ nơi chốn, do đó đáp án là "habitat" hoặc "habitats", không phải "diet".',
    'Câu 11: viết đúng 1 từ: "Europe" (không viết "continental Europe" hay "Britain").',
    'Câu 12: "The White Admiral of southern England" -> tìm thấy ở các khu vực southern của nước Anh.',
    'Câu 13: "exists solely on a diet of..." tương ứng hoàn hảo với "the diet of the caterpillar".',
  ],
};

export const PARAGRAPHS: ParagraphData[] = [
  {
    id: 1,
    sectionTitle: 'Population Declines & Ecosystem Role of Caterpillars',
    text: "According to conservationists, populations of around two thirds of butterfly species have declined in Britain over the past 40 years. If this trend continues, it might have unpredictable knock-on effects for other species in the ecosystem. Butterfly eggs develop into caterpillars and these insects, which are the second stage in a new butterfly's lifecycle, consume vast quantities of plant material, and in turn act as prey for birds as well as bats and other small mammals. Only by arming themselves with an understanding of why butterfly numbers are down can conservationists hope to halt or reverse the decline.",
  },
  {
    id: 2,
    sectionTitle: 'Summer Temperature & The Concept of Phenology',
    text: "Butterflies prefer outdoor conditions to be 'just right', which means neither too hot nor too cold. Under the conditions of climate change, the temperature at any given time in summer is generally getting warmer, leaving butterflies with the challenge of how to deal with this. One of the main ways in which species are ensuring conditions suit them is by changing the time of year at which they are active and reproduce. Scientists refer to the timing of such lifecycle events as 'phenology', so when an animal or plant starts to do something earlier in the year than it usually does, it is said to be 'advancing its phenology'.",
  },
  {
    id: 3,
    sectionTitle: 'Observed Spring Advances & The Coping Mechanism Question',
    text: "These advances have been observed already in a wide range of butterflies - indeed, most species are advancing their phenology to some extent. In Britain, as the average spring temperature has increased by roughly 0.5 °C over the past 20 years, species have advanced by between three days and a week on average, to keep in line with cooler temperatures. Is this a sign that butterflies are well equipped to cope with climate change, and readily adjust to new temperatures? Or are these populations under stress, being dragged along unwillingly by unnaturally fast changes? The answer is still unknown, but a new study is seeking to answer these questions.",
  },
  {
    id: 4,
    sectionTitle: 'Citizen Science & The 20-Year Dataset',
    text: "First, the researchers pulled together data from millions of records that had been submitted by butterfly enthusiasts - people who spend their free time observing the activities of different species. This provided information on 130 species of butterflies in Great Britain every year for a 20-year period. They then estimated the abundance and distribution of each species across this time, along with how far north in the country they had moved. The data also, crucially, allowed researchers to estimate subtle changes in what time of the year each species was changing into an adult butterfly.",
  },
  {
    id: 5,
    sectionTitle: 'Flexible Lifecycles & Multiple Generations',
    text: "Analysing the trends in each variable, the researchers discovered that species with more flexible lifecycles were more likely to be able to benefit from an earlier emergence driven by climate change. Some species are able to go from caterpillar to butterfly twice or more per year, so that the individual butterflies you see flying in the spring are the grandchildren or great-grandchildren of the individuals seen a year previously.",
  },
  {
    id: 6,
    sectionTitle: 'The Small Blue & Successful Phenological Advances',
    text: "Among these species, researchers observed that those which have been advancing their phenology the most over the 20-year study period also had the most positive trends in abundance, distribution and northwards extent. For these species, such as Britain's tiniest butterfly, the dainty Small Blue, whose colonies are up to a hundred strong, some develop into butterflies early in spring, allowing their summer generations to complete another reproductive cycle by autumn so that more population growth occurs.",
  },
  {
    id: 7,
    sectionTitle: 'Single-Generation Vulnerability & The High Brown Fritillary',
    text: "Other species, however, are less flexible and restricted to a single reproductive cycle per year. For these species, there was no evidence of any benefit to emerging earlier. Indeed, worryingly, it was found that the species in this group that specialise in very specific habitat types, often related to the caterpillar's preferred diet, actually tended to be most at harm from advancing phenology. The beautiful High Brown Fritillary, often described as Britain's most endangered butterfly, is in this group. It is found only in coppiced woodland and limestone pavement habitats. It is also a single-generation butterfly that has advanced its phenology. This suggests that climate change, while undoubtedly not the sole cause, might have played a part in the downfall of this species.",
  },
  {
    id: 8,
    sectionTitle: 'Warmth in Continental Europe & Potential for Second Generations',
    text: "All is not lost, however. Many of Britain's single-generation species show the capacity, in continental Europe, to add a second generation in years that are sufficiently warm. Therefore, as the climate continues to warm, species like the Silver-studded Blue might be able to switch to multiple generations in the UK as well, and so begin to extract benefits from the additional warmth, potentially leading to population increases.",
  },
  {
    id: 9,
    sectionTitle: 'Conservation Warning Signs & The White Admiral',
    text: "More immediately, conservationists can arm themselves with all this knowledge to spot the warning signs of species that may be at risk. The White Admiral of southern England, a much sought-after butterfly, experienced a significant increase in numbers from the 1920s but has shown a considerable decline in the past 20 years. This may be because the caterpillar exists solely on a diet of a plant called honeysuckle. But it is also likely to be due to climate change.",
  },
];

export const QUESTIONS: QuestionItem[] = [
  {
    id: 1,
    questionNumber: 1,
    type: 'true_false_not_given',
    sectionType: 'tfng',
    prompt: 'Forty years ago, there were fewer butterflies in Britain than at present.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Find the time reference 40 years in paragraph 1 and see whether populations increased or declined.',
    tipVi: 'Tìm mốc 40 năm (40 years) ở đoạn 1 và kiểm tra xem số lượng bướm tăng lên hay sụt giảm.',
    advice:
      'Check the direction of the trend: if populations declined over the past 40 years, were there fewer or more butterflies in the past?',
    adviceVi:
      'Xem xét chiều hướng biến động: nếu số lượng suy giảm trong 40 năm qua, thì trong quá khứ có ít hơn hay nhiều hơn bướm so với hiện tại?',
    officialAnswer: 'FALSE',
    acceptedAnswers: ['FALSE', 'F'],
    paragraphRef: 1,
    paragraphQuote:
      'populations of around two thirds of butterfly species have declined in Britain over the past 40 years.',
    explanation:
      'In the first paragraph, the writer says, "populations of around two thirds of butterfly species have declined in Britain over the past 40 years". If the populations have declined, this means there were more butterflies in the past, not fewer. Therefore, the statement contradicts the text (FALSE).',
    explanationVi:
      'Trong đoạn đầu tiên, tác giả nêu rõ: "quần thể của khoảng 2/3 các loài bướm đã suy giảm ở Anh trong 40 năm qua". Nếu quần thể đã suy giảm, điều này có nghĩa là trong quá khứ có nhiều bướm hơn, chứ không phải ít hơn (fewer). Vì vậy, nhận định mâu thuẫn với bài đọc (FALSE).',
  },
  {
    id: 2,
    questionNumber: 2,
    type: 'true_false_not_given',
    sectionType: 'tfng',
    prompt: 'Caterpillars are eaten by a number of different predators.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Locate caterpillars in paragraph 1 and see what animals feed on them ("act as prey for...").',
    tipVi: 'Định vị từ caterpillars ở đoạn 1 và xem những loài động vật nào ăn chúng ("act as prey for...").',
    advice:
      'Notice the phrase "act as prey for birds as well as bats and other small mammals." Birds, bats, and small mammals are all predators.',
    adviceVi:
      'Chú ý cụm từ "act as prey for birds as well as bats and other small mammals". Chim, dơi và thú nhỏ đều là các loài săn mồi.',
    officialAnswer: 'TRUE',
    acceptedAnswers: ['TRUE', 'T'],
    paragraphRef: 1,
    paragraphQuote:
      'Butterfly eggs develop into caterpillars and these insects ... act as prey for birds as well as bats and other small mammals.',
    explanation:
      'In the first paragraph, the writer says, "Butterfly eggs develop into caterpillars and these insects ... act as prey for birds as well as bats and other small mammals." The bats and other small mammals are therefore predators which eat the caterpillars. The statement agrees with the text (TRUE).',
    explanationVi:
      'Trong đoạn đầu, tác giả viết: "Trứng bướm phát triển thành sâu bướm và những loài côn trùng này... đóng vai trò làm con mồi cho chim cũng như dơi và các động vật có vú nhỏ khác". Dơi và các động vật có vú nhỏ do đó là những kẻ săn mồi ăn sâu bướm. Nhận định hoàn toàn trùng khớp với bài đọc (TRUE).',
  },
  {
    id: 3,
    questionNumber: 3,
    type: 'true_false_not_given',
    sectionType: 'tfng',
    prompt: "'Phenology' is a term used to describe a creature's ability to alter the location of a lifecycle event.",
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Read the definition of phenology in paragraph 2 carefully: does it refer to time of year or physical location?',
    tipVi: 'Đọc kỹ định nghĩa phenology ở đoạn 2: thuật ngữ này nói về thời điểm trong năm (time of year) hay địa điểm vật lý (location)?',
    advice:
      'Does phenology relate to the timing of events (when they happen) or where they take place?',
    adviceVi:
      'Phenology liên quan đến thời điểm diễn ra sự kiện (khi nào) hay địa điểm nơi chúng diễn ra?',
    officialAnswer: 'FALSE',
    acceptedAnswers: ['FALSE', 'F'],
    paragraphRef: 2,
    paragraphQuote:
      "changing the time of year at which they are active and reproduce. Scientists refer to the timing of such lifecycle events as 'phenology'...",
    explanation:
      "According to the text in the second paragraph, phenology involves species changing the time of year when lifecycle events such as activity and reproduction occur, and not the location of these events. The statement falsely claims it refers to altering the location (FALSE).",
    explanationVi:
      "Theo văn bản ở đoạn 2, phenology (thời học/hiện tượng học) chỉ việc các loài thay đổi thời điểm trong năm khi các sự kiện vòng đời như hoạt động và sinh sản diễn ra, chứ không phải là địa điểm của các sự kiện này. Nhận định cho rằng thuật ngữ này chỉ việc thay đổi địa điểm (location) là sai (FALSE).",
  },
  {
    id: 4,
    questionNumber: 4,
    type: 'true_false_not_given',
    sectionType: 'tfng',
    prompt: 'Some species of butterfly have a reduced lifespan due to spring temperature increases.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Look for spring temperature increases in paragraph 3. Is there any mention of how long butterflies live (lifespan)?',
    tipVi: 'Tìm sự gia tăng nhiệt độ mùa xuân ở đoạn 3. Có đề cập nào về việc bướm sống được bao lâu (tuổi thọ - lifespan) không?',
    advice:
      'Distinguish between advancing phenology (emerging earlier in the season) and lifespan (the duration of an individual butterfly\'s life).',
    adviceVi:
      'Phân biệt giữa việc xuất hiện sớm hơn trong mùa (advancing phenology) và tuổi thọ (lifespan - thời gian sống của một cá thể bướm).',
    officialAnswer: 'NOT GIVEN',
    acceptedAnswers: ['NOT GIVEN', 'NG'],
    paragraphRef: 3,
    paragraphQuote:
      'as the average spring temperature has increased by roughly 0.5 °C over the past 20 years, species have advanced by between three days and a week on average...',
    explanation:
      'The third paragraph says that "as the average spring temperature has increased ... species have advanced (their phenology – that is, lifestyle events such as reproduction) by between three days and a week on average", but the text does not say anything about how long the butterflies live for (their lifespan). Therefore, the answer is NOT GIVEN.',
    explanationVi:
      'Đoạn 3 cho biết: "khi nhiệt độ mùa xuân trung bình tăng khoảng 0.5 °C trong 20 năm qua, các loài đã đẩy sớm thời điểm xuất hiện từ 3 ngày đến 1 tuần tính trung bình", nhưng bài đọc hoàn toàn không đề cập gì đến việc bướm sống được bao lâu (tuổi thọ của chúng). Vì vậy đáp án là NOT GIVEN.',
  },
  {
    id: 5,
    questionNumber: 5,
    type: 'true_false_not_given',
    sectionType: 'tfng',
    prompt: 'There is a clear reason for the adaptations that butterflies are making to climate change.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Look at the questions asked by researchers at the end of paragraph 3: is the reason known or unknown?',
    tipVi: 'Xem những câu hỏi của các nhà nghiên cứu ở cuối đoạn 3: nguyên nhân đã được biết hay vẫn chưa rõ?',
    advice:
      'Notice the direct statement at the end of paragraph 3: "The answer is still unknown".',
    adviceVi:
      'Chú ý câu khẳng định trực tiếp ở cuối đoạn 3: "The answer is still unknown" (Câu trả lời vẫn chưa được biết).',
    officialAnswer: 'FALSE',
    acceptedAnswers: ['FALSE', 'F'],
    paragraphRef: 3,
    paragraphQuote:
      'Is this a sign that butterflies are well equipped to cope with climate change, and readily adjust to new temperatures? Or are these populations under stress, being dragged along unwillingly by unnaturally fast changes? The answer is still unknown...',
    explanation:
      'The third paragraph asks whether changes in the timing of lifestyle events is because the butterflies are adapting to climate change, or a sign that they are "under stress (struggling to adapt)", and then says that "The answer is still unknown". Saying there is a "clear reason" contradicts the text (FALSE).',
    explanationVi:
      'Đoạn 3 đặt câu hỏi liệu sự thay đổi thời điểm các sự kiện vòng đời là do bướm thích nghi tốt với biến đổi khí hậu, hay là dấu hiệu chúng đang "bị căng thẳng (chật vật thích nghi)", và sau đó kết luận rằng: "Câu trả lời vẫn chưa được biết". Khẳng định cho rằng có một lý do rõ ràng là hoàn toàn trái ngược với bài (FALSE).',
  },
  {
    id: 6,
    questionNumber: 6,
    type: 'true_false_not_given',
    sectionType: 'tfng',
    prompt: 'The data used in the study was taken from the work of amateur butterfly watchers.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Find who submitted the data in paragraph 4: how are butterfly enthusiasts described?',
    tipVi: 'Tìm xem ai là người gửi dữ liệu ở đoạn 4: những người đam mê bướm được miêu tả như thế nào?',
    advice:
      'Look at the description: "people who spend their free time observing the activities of different species." Non-professionals doing observation in free time are amateurs.',
    adviceVi:
      'Nhìn vào mô tả: "những người dành thời gian rảnh rỗi để quan sát hoạt động của các loài khác nhau". Những người quan sát trong thời gian rảnh rỗi chính là những người nghiệp dư (amateurs).',
    officialAnswer: 'TRUE',
    acceptedAnswers: ['TRUE', 'T'],
    paragraphRef: 4,
    paragraphQuote:
      'records that had been submitted by butterfly enthusiasts - people who spend their free time observing the activities of different species.',
    explanation:
      'According to the fourth paragraph, data was collected from records "submitted by butterfly enthusiasts ... who spend their free time observing the activities of different [butterfly] species". Because they spend their free time doing this rather than as professional employment, they are amateur butterfly watchers. The statement agrees with the text (TRUE).',
    explanationVi:
      'Theo đoạn thứ 4, dữ liệu được thu thập từ các ghi chép "do những người đam mê bướm gửi về... những người dành thời gian rảnh rỗi của mình để quan sát các hoạt động của các loài bướm khác nhau". Vì họ làm việc này trong thời gian rảnh rỗi chứ không phải làm nghề chuyên nghiệp, họ chính là những người quan sát bướm nghiệp dư. Khẳng định đúng (TRUE).',
  },
  {
    id: 7,
    questionNumber: 7,
    type: 'short_answer',
    sectionType: 'notes',
    noteSection: 'The Small Blue',
    notePrefix: 'lives in large',
    noteSuffix: '',
    prompt: 'The Small Blue • lives in large 7 ...............................',
    instruction: 'Choose ONE WORD ONLY from the passage for each answer.',
    maxWords: 1,
    tip: 'Locate the Small Blue in paragraph 6. What noun follows "lives in large" to describe groups of up to a hundred?',
    tipVi: 'Tìm bướm Small Blue ở đoạn 6. Danh từ nào đứng sau "lives in large" để miêu tả các nhóm lên đến cả trăm cá thể?',
    advice:
      'In paragraph 6, find the phrase "whose colonies are up to a hundred strong". Colonies means groups.',
    adviceVi:
      'Ở đoạn 6, tìm cụm "whose colonies are up to a hundred strong". Colonies nghĩa là bầy đàn/quần thể.',
    distraction:
      "'Generations' and 'population' are incorrect as neither of these nouns can follow the phrase 'lives in'.",
    distractionVi:
      "'Generations' và 'population' đều không phù hợp ngữ pháp và ngữ nghĩa khi đi sau cụm 'lives in'.",
    officialAnswer: 'colonies',
    acceptedAnswers: ['colonies'],
    paragraphRef: 6,
    paragraphQuote:
      'the dainty Small Blue, whose colonies are up to a hundred strong...',
    explanation:
      'In the sixth paragraph, we are told that the Small Blue butterfly has colonies (groups) "up to a hundred strong", meaning it lives in large colonies. "Generations" and "population" are incorrect as neither of these nouns can follow the phrase "lives in". The correct answer is "colonies".',
    explanationVi:
      'Ở đoạn 6, chúng ta được biết loài bướm Small Blue có các bầy đàn ("colonies up to a hundred strong" - lên tới 100 cá thể), có nghĩa là nó sống thành những bầy đàn lớn (large colonies). "Generations" và "population" đều sai vì không thể đi cùng với cụm "lives in". Đáp án đúng là "colonies".',
  },
  {
    id: 8,
    questionNumber: 8,
    type: 'short_answer',
    sectionType: 'notes',
    noteSection: 'The Small Blue',
    notePrefix: 'first appears at the start of',
    noteSuffix: '',
    prompt: 'The Small Blue • first appears at the start of 8 ...............................',
    instruction: 'Choose ONE WORD ONLY from the passage for each answer.',
    maxWords: 1,
    tip: 'When do some Small Blue butterflies develop into adults? Look for a season name in paragraph 6.',
    tipVi: 'Khi nào một số cá thể bướm Small Blue phát triển thành bướm trưởng thành? Tìm tên một mùa ở đoạn 6.',
    advice:
      'Look for "early in spring". "Early in" paraphrases "at the start of".',
    adviceVi:
      'Tìm cụm "early in spring". "Early in" diễn đạt tương đương cho "at the start of".',
    distraction:
      "'Year' is incorrect grammatically as it needs to be preceded by 'the'.",
    distractionVi:
      "'Year' không đúng về mặt ngữ pháp vì bắt buộc phải có mạo từ 'the' đi kèm ('the start of the year').",
    officialAnswer: 'spring',
    acceptedAnswers: ['spring'],
    paragraphRef: 6,
    paragraphQuote:
      'some develop into butterflies early in spring, allowing their summer generations to complete another reproductive cycle...',
    explanation:
      'The text refers to butterflies "early in the spring" which are the offspring of the previous year\'s butterflies ("some develop into butterflies early in spring"). "Early in spring" matches "at the start of spring". "Year" is incorrect grammatically as it needs to be preceded by "the". The answer is "spring".',
    explanationVi:
      'Bài đọc nhắc đến việc bướm phát triển thành bướm "vào đầu mùa xuân" ("early in spring"), là con non của lứa bướm năm trước. Cụm "early in spring" hoàn toàn tương ứng với "at the start of spring". "Year" sai ngữ pháp vì cần có "the" đứng trước. Đáp án là "spring".',
  },
  {
    id: 9,
    questionNumber: 9,
    type: 'short_answer',
    sectionType: 'notes',
    noteSection: 'The High Brown Fritillary',
    notePrefix: 'is considered to be more',
    noteSuffix: 'than other species',
    prompt: 'The High Brown Fritillary • is considered to be more 9 ............................... than other species',
    instruction: 'Choose ONE WORD ONLY from the passage for each answer.',
    maxWords: 1,
    tip: 'Find High Brown Fritillary in paragraph 7. What superlative adjective describes its risk level?',
    tipVi: 'Tìm loài High Brown Fritillary ở đoạn 7. Tính từ so sánh nhất nào miêu tả mức độ rủi ro của nó?',
    advice:
      'Look for "often described as Britain\'s most endangered butterfly". Most endangered means more endangered than others.',
    adviceVi:
      'Tìm cụm "often described as Britain\'s most endangered butterfly". "Most endangered" đồng nghĩa với "more endangered than others".',
    distraction:
      "'Advanced' is incorrect as although it is possible grammatically, the text does not say that this butterfly is more advanced than other species.",
    distractionVi:
      "'Advanced' là sai vì mặc dù có thể hợp ngữ pháp, bài đọc không hề nói loài bướm này tiến bộ/phát triển hơn các loài khác.",
    officialAnswer: 'endangered',
    acceptedAnswers: ['endangered'],
    paragraphRef: 7,
    paragraphQuote:
      "The beautiful High Brown Fritillary, often described as Britain's most endangered butterfly, is in this group.",
    explanation:
      'The seventh paragraph tells us that the High Brown Fritillary is "often described as Britain\'s most endangered butterfly". This means it is considered to be more endangered than other species. "Advanced" is incorrect as although it is possible grammatically, the text does not say that this butterfly is more advanced than other species. The correct answer is "endangered".',
    explanationVi:
      'Đoạn 7 cho biết loài bướm High Brown Fritillary "thường được miêu tả là loài bướm có nguy cơ tuyệt chủng cao nhất nước Anh" (Britain\'s most endangered butterfly). Điều này đồng nghĩa với việc nó bị đe dọa (endangered) hơn các loài khác. "Advanced" là sai vì bài không nói loài này tiên tiến hơn loài khác. Đáp án là "endangered".',
  },
  {
    id: 10,
    questionNumber: 10,
    type: 'short_answer',
    sectionType: 'notes',
    noteSection: 'The High Brown Fritillary',
    notePrefix: 'its caterpillars occupy a limited range of',
    noteSuffix: '',
    prompt: 'The High Brown Fritillary • its caterpillars occupy a limited range of 10 ...............................',
    instruction: 'Choose ONE WORD ONLY from the passage for each answer.',
    maxWords: 1,
    tip: 'Notice the verb "occupy". What physical place or environment types do they live in?',
    tipVi: 'Chú ý động từ "occupy" (cư ngụ/chiếm giữ). Chúng sống ở môi trường hay địa điểm cụ thể nào?',
    advice:
      'The text states they "specialise in very specific habitat types" and are found only in coppiced woodland and limestone pavement habitats.',
    adviceVi:
      'Bài đọc nêu chúng "chuyên biệt hóa ở các kiểu môi trường sống rất đặc thù" (very specific habitat types) và chỉ tìm thấy ở rừng chồi và nền đá vôi.',
    distraction:
      "'Diet' is incorrect as although the text does suggest that the caterpillar's diet is limited, the word 'occupy' in the item tells us that the answer must refer to a place.",
    distractionVi:
      "'Diet' là sai vì mặc dù chế độ ăn của sâu bướm bị hạn chế, động từ 'occupy' (cư ngụ) cho thấy câu trả lời phải chỉ một địa điểm/môi trường sống.",
    officialAnswer: 'habitat',
    acceptedAnswers: ['habitat', 'habitats'],
    paragraphRef: 7,
    paragraphQuote:
      'specialise in very specific habitat types ... It is found only in coppiced woodland and limestone pavement habitats.',
    explanation:
      'The High Brown Fritillary is one of a group of species that "specialise in very specific habitat types". This butterfly "is found only in coppiced woodland and limestone pavement habitats". "Diet" is incorrect as although the text does suggest that the caterpillar\'s diet is limited, the word "occupy" in the item tells us that the answer must refer to a place. The correct answer is "habitat" or "habitats".',
    explanationVi:
      'Loài High Brown Fritillary thuộc nhóm loài "chuyên biệt ở các kiểu môi trường sống rất đặc thù" (habitat types). Bướm này "chỉ được tìm thấy ở rừng chồi và nền đá vôi" (woodland and limestone pavement habitats). "Diet" là sai vì mặc dù sâu bướm có chế độ ăn hạn chế, từ "occupy" (cư ngụ) bắt buộc từ điền vào phải chỉ nơi chốn. Đáp án là "habitat" hoặc "habitats".',
  },
  {
    id: 11,
    questionNumber: 11,
    type: 'short_answer',
    sectionType: 'notes',
    noteSection: 'The Silver-studded Blue',
    notePrefix: 'is already able to reproduce twice a year in warm areas of',
    noteSuffix: '',
    prompt: 'The Silver-studded Blue • is already able to reproduce twice a year in warm areas of 11 ...............................',
    instruction: 'Choose ONE WORD ONLY from the passage for each answer.',
    maxWords: 1,
    tip: 'Where does this species already "add a second generation"? Remember: ONE WORD ONLY!',
    tipVi: 'Loài này đã có thể "sinh thêm thế hệ thứ hai" ở đâu? Hãy nhớ: CHỈ MỘT TỪ!',
    advice:
      'Look for "in continental Europe, to add a second generation in years that are sufficiently warm". You must write only "Europe" to respect the one-word limit.',
    adviceVi:
      'Tìm cụm "in continental Europe, to add a second generation in years that are sufficiently warm". Bạn phải chọn "Europe" để đảm bảo giới hạn 1 từ.',
    distraction:
      "'Britain' is incorrect as Britain is not part of continental Europe since it is an island. 'Continental Europe' is incorrect as answers must be one word only.",
    distractionVi:
      "'Britain' là sai vì ở Anh loài này chưa làm được điều đó. 'Continental Europe' sai vì phạm quy định giới hạn CHỈ MỘT TỪ.",
    officialAnswer: 'Europe',
    acceptedAnswers: ['Europe'],
    paragraphRef: 8,
    paragraphQuote:
      'Many of Britain\'s single-generation species show the capacity, in continental Europe, to add a second generation in years that are sufficiently warm.',
    explanation:
      'The eighth paragraph says that the Silver-studded Blue butterfly can "add a second generation (reproduce twice)" in "continental Europe". "Britain" is incorrect as Britain is not part of continental Europe since it is an island. "Continental Europe" is incorrect as answers must be one word only. Therefore, the correct answer is "Europe".',
    explanationVi:
      'Đoạn 8 cho biết loài bướm này có khả năng "sinh thêm thế hệ thứ hai (sinh sản hai lần một năm)" ở "continental Europe" (lục địa châu Âu). "Britain" là sai vì ở Anh loài này chưa làm được điều đó. "Continental Europe" gồm hai từ nên phạm quy định giới hạn từ. Đáp án đúng duy nhất là "Europe".',
  },
  {
    id: 12,
    questionNumber: 12,
    type: 'short_answer',
    sectionType: 'notes',
    noteSection: 'The White Admiral',
    notePrefix: 'is found in',
    noteSuffix: 'areas of England',
    prompt: 'The White Admiral • is found in 12 ............................... areas of England',
    instruction: 'Choose ONE WORD ONLY from the passage for each answer.',
    maxWords: 1,
    tip: 'Locate The White Admiral in paragraph 9. What adjective describes the area of England it belongs to?',
    tipVi: 'Tìm loài White Admiral ở đoạn 9. Tính từ nào mô tả khu vực của nước Anh nơi loài bướm này sinh sống?',
    advice:
      'Look at the phrase "The White Admiral of southern England". Southern areas of England matches southern England.',
    adviceVi:
      'Nhìn vào cụm "The White Admiral of southern England". "Southern areas of England" hoàn toàn tương đương với "southern England".',
    distraction:
      "Make sure to copy the exact word 'southern' without altering the spelling.",
    distractionVi:
      "Đảm bảo sao chép chính xác từ 'southern' mà không làm sai chính tả.",
    officialAnswer: 'southern',
    acceptedAnswers: ['southern'],
    paragraphRef: 9,
    paragraphQuote:
      'The White Admiral of southern England, a much sought-after butterfly, experienced a significant increase in numbers...',
    explanation:
      'The final paragraph refers to "The White Admiral of southern England". This directly corresponds to being found in "southern" areas of England. The correct answer is "southern".',
    explanationVi:
      'Đoạn cuối cùng nhắc đến "The White Admiral of southern England" (loài White Admiral của miền nam nước Anh). Điều này tương ứng trực tiếp với việc nó được tìm thấy ở các khu vực phía nam ("southern") của nước Anh. Đáp án là "southern".',
  },
  {
    id: 13,
    questionNumber: 13,
    type: 'short_answer',
    sectionType: 'notes',
    noteSection: 'The White Admiral',
    notePrefix: 'both climate change and the',
    noteSuffix: 'of the caterpillar are possible reasons for decline',
    prompt: 'The White Admiral • both climate change and the 13 ............................... of the caterpillar are possible reasons for decline',
    instruction: 'Choose ONE WORD ONLY from the passage for each answer.',
    maxWords: 1,
    tip: 'What about the caterpillar might cause the decline? Look at what it exists solely on in paragraph 9.',
    tipVi: 'Điều gì ở sâu bướm có thể gây ra sự suy giảm? Xem nó chỉ tồn tại nhờ thứ gì ở đoạn 9.',
    advice:
      'Paragraph 9 says "the caterpillar exists solely on a diet of a plant called honeysuckle". The noun following "the" must make sense before "of the caterpillar".',
    adviceVi:
      'Đoạn 9 nêu: sâu bướm chỉ tồn tại nhờ một khẩu phần ăn/chế độ ăn ("diet") một loại cây gọi là hoa kim ngân. Cụm "the diet of the caterpillar" là chuẩn xác nhất.',
    distraction:
      "'Plant' and 'honeysuckle' are incorrect as these do not make sense when followed by the phrase 'of the caterpillar'.",
    distractionVi:
      "'Plant' và 'honeysuckle' đều sai vì không tạo thành nghĩa hợp lý khi đi cùng với cụm 'of the caterpillar'.",
    officialAnswer: 'diet',
    acceptedAnswers: ['diet'],
    paragraphRef: 9,
    paragraphQuote:
      'This may be because the caterpillar exists solely on a diet of a plant called honeysuckle. But it is also likely to be due to climate change.',
    explanation:
      'The paragraph says that "the caterpillar exists solely on a diet of a plant called honeysuckle". This identifies "the diet of the caterpillar" as one possible factor, along with climate change. "Plant" and "honeysuckle" are incorrect as these do not make sense when followed by the phrase "of the caterpillar". The correct answer is "diet".',
    explanationVi:
      'Đoạn văn nói rằng: "sâu bướm chỉ tồn tại hoàn toàn dựa vào chế độ ăn (diet) một loài cây gọi là hoa kim ngân". Điều này chỉ ra "chế độ ăn của sâu bướm" (the diet of the caterpillar) là một nguyên nhân tiềm tàng cùng với biến đổi khí hậu. "Plant" và "honeysuckle" là sai vì khi ghép vào "of the caterpillar" sẽ vô nghĩa. Đáp án đúng là "diet".',
  },
];

export function calculateEstimatedBandScore(score: number): { band: string; description: string } {
  if (score >= 13) return { band: '9.0', description: 'Expert User — Fluent, accurate, and complete understanding.' };
  if (score === 12) return { band: '8.5', description: 'Very Good User — Operational command with rare inaccuracies.' };
  if (score === 11) return { band: '8.0', description: 'Very Good User — Complex detailed argumentation handled well.' };
  if (score === 10) return { band: '7.5', description: 'Good User — Operational command, handles complex language well.' };
  if (score === 9) return { band: '7.0', description: 'Good User — Generally effective command, minor inaccuracies.' };
  if (score === 8) return { band: '6.5', description: 'Competent User — Generally effective command in familiar situations.' };
  if (score === 7) return { band: '6.0', description: 'Competent User — Understands reasonably well, some errors.' };
  if (score >= 5) return { band: '5.5', description: 'Modest User — Partial command, handles basic meaning.' };
  if (score >= 3) return { band: '5.0', description: 'Modest User — Many mistakes, basic competence only.' };
  return { band: '4.5', description: 'Limited User — Basic command, struggles with complex structures.' };
}

export function checkAnswerCorrectness(question: QuestionItem, rawUserAnswer: string): boolean {
  if (!rawUserAnswer) return false;
  const cleaned = rawUserAnswer.trim().toLowerCase();

  if (question.type === 'true_false_not_given') {
    const isTrue = cleaned === 'true' || cleaned === 't';
    const isFalse = cleaned === 'false' || cleaned === 'f';
    const isNotGiven = cleaned === 'not given' || cleaned === 'ng' || cleaned === 'notgiven';

    if (question.officialAnswer === 'TRUE') return isTrue;
    if (question.officialAnswer === 'FALSE') return isFalse;
    if (question.officialAnswer === 'NOT GIVEN') return isNotGiven;
    return false;
  }

  // Short answer / Note completion (ONE WORD ONLY)
  const normalizedCleaned = cleaned
    .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  return question.acceptedAnswers.some((accepted) => {
    const normAccepted = accepted
      .toLowerCase()
      .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    return normalizedCleaned === normAccepted;
  });
}
