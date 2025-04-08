import { Module } from "./types";

export const modules: Module[] = [
  {
    id: 1,
    title: "Self-awareness: Understand your engagement style",
    summary: "Discover how your unique working style impacts team dynamics and project outcomes.",
    content: {
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus purus, et sodales nisi tincidunt a. Pellentesque mattis nibh id ex faucibus malesuada.",
        "Donec at odio vitae justo aliquam commodo. Curabitur placerat turpis eget orci aliquam, in convallis sem tempor. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
      ],
      media: [
        { type: "image", src: "module1_image1.jpg", alt: "Self-awareness framework" },
        { type: "image", src: "module1_image2.jpg", alt: "Engagement styles diagram" },
        { type: "video", src: "module1_video1.mp4", title: "Understanding Your Working Style" },
        { type: "audio", src: "module1_audio1.mp3", title: "Interview: Identifying Your Strengths" }
      ]
    },
    interactiveElement: {
      title: "Personal Style Assessment",
      description: "Complete this interactive assessment to identify your primary engagement style.",
    },
  },
  {
    id: 2,
    title: "Other awareness: Engage effectively with your team",
    summary: "Learn to recognize different working styles and adapt your approach for effective team collaboration.",
    content: {
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit malesuada lacinia. Quisque vitae sapien a ante suscipit tincidunt non vel magna. Sed in diam ut dolor imperdiet laoreet.",
        "Praesent convallis fermentum diam, in dignissim magna condimentum in. Sed condimentum arcu in tellus ultrices, eu pharetra enim rhoncus. Cras convallis velit id elit vulputate posuere.",
        "Ut finibus velit a augue fermentum, fringilla faucibus libero imperdiet. Mauris egestas purus nisi, eu semper felis placerat in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        "Nullam commodo fringilla massa, in commodo neque pellentesque ac. Donec tempus, neque in scelerisque finibus, arcu arcu bibendum metus, eu finibus tortor magna nec felis."
      ],
      media: [
        { type: "image", src: "module2_image1.jpg", alt: "Team interaction patterns" },
        { type: "image", src: "module2_image2.jpg", alt: "Communication styles matrix" },
        { type: "video", src: "module2_video1.mp4", title: "Recognizing Team Dynamics" },
        { type: "pdf", src: "module2_resource1.pdf", title: "Adapting to Different Styles Guide" }
      ]
    },
    interactiveElement: {
      title: "Team Styles Simulator",
      description: "Practice recognizing and responding to different team member styles in this interactive scenario.",
    },
  },
  {
    id: 3,
    title: "Engage fully with your teammates",
    summary: "Master techniques for active listening, meaningful contributions, and building rapport with team members.",
    content: {
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nisi, eu porttitor magna turpis eget purus. Nullam mattis eleifend velit, eu commodo est accumsan ut.",
        "Phasellus rhoncus vulputate lacus, non ornare eros condimentum ac. Nulla facilisi. Phasellus tincidunt justo eu massa pretium, in tempus magna pulvinar. Proin blandit nulla in risus volutpat, vel volutpat nisl ultricies.",
        "Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non sapien condimentum, tempor tortor vel, facilisis orci. Fusce vitae magna quis felis sagittis convallis.",
        "Curabitur molestie maximus risus, a ultricies risus vulputate id. Integer finibus consequat arcu, vel sollicitudin nunc auctor in."
      ],
      media: [
        { type: "image", src: "module3_image1.jpg", alt: "Active listening techniques" },
        { type: "image", src: "module3_image2.jpg", alt: "Team engagement model" },
        { type: "video", src: "module3_video1.mp4", title: "Building Team Rapport" },
        { type: "audio", src: "module3_audio1.mp3", title: "Expert Interview: Meaningful Contributions" }
      ]
    },
    interactiveElement: {
      title: "Active Listening Exercise",
      description: "Practice active listening skills with this interactive scenario-based exercise.",
    },
  },
  {
    id: 4,
    title: "Manage expectations and foster trust",
    summary: "Learn strategies to set clear expectations, deliver on commitments, and build lasting trust.",
    content: {
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ornare enim, vel ultrices magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent egestas, nisi id fringilla ultricies.",
        "Nunc nulla felis, volutpat nec lacus non, dapibus ultricies urna. Duis sit amet eros et nisi blandit feugiat. Cras ut ex malesuada, ultrices sem a, gravida nisi. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        "Vivamus fringilla molestie dui, ac tempus felis molestie vel. Ut vehicula erat quis eros finibus, a dignissim elit eleifend. Vivamus eu tincidunt elit. Nullam bibendum enim et urna finibus, quis pretium erat maximus.",
        "Etiam elementum malesuada eleifend. Cras et venenatis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
      ],
      media: [
        { type: "image", src: "module4_image1.jpg", alt: "Trust building framework" },
        { type: "image", src: "module4_image2.jpg", alt: "Expectation management model" },
        { type: "video", src: "module4_video1.mp4", title: "The Foundation of Team Trust" },
        { type: "pdf", src: "module4_resource1.pdf", title: "Trust Recovery Playbook" }
      ]
    },
    interactiveElement: {
      title: "Trust Building Scenarios",
      description: "Work through challenging scenarios to practice setting and managing expectations.",
    },
  },
  {
    id: 5,
    title: "Foster psychological safety",
    summary: "Create an environment where team members feel safe to take risks, share ideas, and be themselves.",
    content: {
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis sem vel arcu placerat imperdiet. Duis ac ex in risus efficitur commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        "Curabitur bibendum turpis ut metus facilisis, in facilisis dui porttitor. Aenean dapibus vulputate diam. Integer dapibus mi ac nisi suscipit, ut ultricies odio vulputate. Ut quis tellus nec turpis ultrices pellentesque eget vitae lectus.",
        "Fusce porttitor auctor tempor. In hac habitasse platea dictumst. Aenean molestie nibh ut sagittis tincidunt. Cras commodo lobortis quam, ac eleifend leo blandit et. Nulla facilisi. Cras sit amet enim quis nisi consequat facilisis vitae id sapien.",
        "Vestibulum rutrum dui tristique, pretium magna eu, condimentum odio. Aliquam erat volutpat. Proin pellentesque aliquam est, vitae scelerisque ante pulvinar non."
      ],
      media: [
        { type: "image", src: "module5_image1.jpg", alt: "Psychological safety indicators" },
        { type: "image", src: "module5_image2.jpg", alt: "Safety zone framework" },
        { type: "video", src: "module5_video1.mp4", title: "Building a Safe Team Environment" },
        { type: "audio", src: "module5_audio1.mp3", title: "Interview: Leading with Vulnerability" }
      ]
    },
    interactiveElement: {
      title: "Safety Assessment Tool",
      description: "Analyze and improve psychological safety in your team with this interactive assessment.",
    },
  },
  {
    id: 6,
    title: "Capitalize on collaboration for team building",
    summary: "Harness the power of collaborative approaches to strengthen team bonds and improve outcomes.",
    content: {
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum odio augue, ut elementum erat ultricies non. Donec egestas placerat lacus, eget euismod mauris varius ac. Suspendisse potenti. Cras vitae congue nibh.",
        "Nullam lacus magna, dictum non odio id, sollicitudin imperdiet velit. Phasellus pharetra libero in sem eleifend scelerisque. Donec faucibus luctus dignissim. Integer rhoncus, est et commodo euismod, nibh sapien facilisis sem, vitae egestas mi dolor sed tortor.",
        "Quisque fermentum ut ex vitae sagittis. Quisque sodales purus eget varius convallis. Nulla eget velit nec est fringilla gravida. Nullam a justo tempus, consectetur nulla quis, rhoncus nibh. Nam non blandit ligula, vitae aliquet odio.",
        "Aenean id orci eget eros aliquam suscipit. Vivamus vulputate metus magna, sed efficitur eros ultricies sit amet. Vivamus sagittis eget metus eu cursus."
      ],
      media: [
        { type: "image", src: "module6_image1.jpg", alt: "Collaboration model" },
        { type: "image", src: "module6_image2.jpg", alt: "Team building framework" },
        { type: "video", src: "module6_video1.mp4", title: "Collaborative Problem Solving" },
        { type: "pdf", src: "module6_resource1.pdf", title: "Collaboration Activities Guide" }
      ]
    },
    interactiveElement: {
      title: "Collaboration Simulator",
      description: "Practice collaborative problem-solving in this interactive team scenario.",
    },
  },
  {
    id: 7,
    title: "Confidently navigate conflict and offer feedback",
    summary: "Learn techniques to address conflicts constructively and deliver feedback that drives positive change.",
    content: {
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis nisl non diam lobortis dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi dictum vitae odio ac tempus.",
        "Fusce vehicula a orci in sagittis. Quisque malesuada blandit odio, ac dignissim dui feugiat in. Cras sit amet felis tempus, aliquet sem in, molestie eros. Cras aliquam vitae nisi ut eleifend. Phasellus interdum malesuada neque vel tristique.",
        "Nulla in semper sapien. Maecenas sed felis et augue consectetur aliquam. Sed iaculis lacus quis diam condimentum, eu faucibus risus hendrerit. Donec consectetur, nulla ut volutpat tempor, eros massa tincidunt purus, ac tempus dui magna a quam.",
        "Sed imperdiet dolor eget justo porttitor, eu tempus nisl iaculis. Duis felis massa, cursus sit amet mauris eget, convallis euismod orci."
      ],
      media: [
        { type: "image", src: "module7_image1.jpg", alt: "Conflict resolution process" },
        { type: "image", src: "module7_image2.jpg", alt: "Feedback framework" },
        { type: "video", src: "module7_video1.mp4", title: "Navigating Difficult Conversations" },
        { type: "audio", src: "module7_audio1.mp3", title: "Expert: Constructive Feedback Techniques" }
      ]
    },
    interactiveElement: {
      title: "Feedback Delivery Practice",
      description: "Practice delivering constructive feedback in various challenging scenarios.",
    },
  },
  {
    id: 8,
    title: "Play to your strengths",
    summary: "Identify and leverage your unique strengths to maximize your contribution to the team.",
    content: {
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor placerat magna, in dapibus nibh lacinia eu. Praesent eget massa quis enim semper vestibulum. Ut vitae enim ac dui dictum posuere.",
        "Sed faucibus diam vitae ante sagittis faucibus. Ut nec lacus sed erat porttitor bibendum. Vestibulum et urna nulla. Proin finibus nibh id orci volutpat, non tincidunt lectus tempor. Sed euismod turpis lectus, id tincidunt purus eleifend sit amet.",
        "Donec volutpat egestas ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras ullamcorper eros vitae odio imperdiet pretium. Vestibulum a turpis risus. Mauris at nibh metus. Sed efficitur eros a dui vestibulum blandit.",
        "Integer fermentum nunc at volutpat vulputate. In ut magna nec sem efficitur eleifend nec nec justo. Phasellus posuere nibh eu rhoncus interdum."
      ],
      media: [
        { type: "image", src: "module8_image1.jpg", alt: "Strengths assessment model" },
        { type: "image", src: "module8_image2.jpg", alt: "Team contribution framework" },
        { type: "video", src: "module8_video1.mp4", title: "Leveraging Your Strengths" },
        { type: "pdf", src: "module8_resource1.pdf", title: "Strengths Development Workbook" }
      ]
    },
    interactiveElement: {
      title: "Strengths Identifier Tool",
      description: "Complete this assessment to identify your core strengths and how to leverage them.",
    },
  },
  {
    id: 9,
    title: "Hone your strategy skills",
    summary: "Develop strategic thinking abilities to better contribute to team planning and decision-making.",
    content: {
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget dictum mauris. Nulla commodo lectus in augue faucibus, ut vulputate nulla tincidunt. Cras consectetur magna eros, nec suscipit lorem vestibulum non. Nullam quis felis a risus rutrum pulvinar.",
        "Suspendisse imperdiet dui ac eros semper, non pretium mauris dictum. Suspendisse potenti. Nam eros velit, iaculis quis ipsum et, aliquet blandit ligula. Sed id fringilla dui, in fringilla nibh. Nulla accumsan neque et aliquet imperdiet.",
        "Nullam ut sem massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi tempor nunc eget luctus vestibulum. Nullam sed nisi sed nisi convallis lobortis. Morbi vitae hendrerit eros, at tincidunt urna.",
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut sit amet justo enim. Pellentesque placerat ut eros non sollicitudin."
      ],
      media: [
        { type: "image", src: "module9_image1.jpg", alt: "Strategic thinking framework" },
        { type: "image", src: "module9_image2.jpg", alt: "Decision-making model" },
        { type: "video", src: "module9_video1.mp4", title: "Developing Strategic Mindset" },
        { type: "audio", src: "module9_audio1.mp3", title: "Interview: Thinking Like a Strategist" }
      ]
    },
    interactiveElement: {
      title: "Strategic Scenario Simulator",
      description: "Practice strategic thinking in realistic team scenarios.",
    },
  },
  {
    id: 10,
    title: "Develop your solution-orientation",
    summary: "Learn to approach challenges with a solution-focused mindset to drive team success.",
    content: {
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium tellus vel enim interdum, quis varius urna tempus. Sed vehicula justo sit amet nunc finibus, sit amet porta lacus fringilla. Aenean cursus tellus vel ipsum luctus mattis.",
        "Cras interdum magna eget est molestie, ac tempus ante placerat. Aenean finibus turpis in ante ultrices, eu euismod libero euismod. Sed cursus metus vel condimentum suscipit. Nullam commodo laoreet dui, quis tincidunt tortor pellentesque non.",
        "Sed varius consectetur dui, a pellentesque mi sodales sed. Sed porttitor metus at magna sodales, vitae sollicitudin orci viverra. Proin id urna vel erat dictum lobortis. Vivamus auctor nulla quis ultrices dictum. Etiam accumsan ante vitae lacus commodo, eget vehicula eros volutpat.",
        "Morbi vel sagittis arcu. Duis tristique justo quis libero ultrices, vel dictum quam volutpat. Suspendisse potenti. Ut in lacus at tellus semper faucibus."
      ],
      media: [
        { type: "image", src: "module10_image1.jpg", alt: "Solution-oriented framework" },
        { type: "image", src: "module10_image2.jpg", alt: "Problem-solving model" },
        { type: "video", src: "module10_video1.mp4", title: "Building Solution Focus" },
        { type: "pdf", src: "module10_resource1.pdf", title: "Solution Toolkit Guide" }
      ]
    },
    interactiveElement: {
      title: "Solution Challenge",
      description: "Apply solution-focused thinking to real-world team challenges.",
    },
  },
];
