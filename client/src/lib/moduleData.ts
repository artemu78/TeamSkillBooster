import { Module } from "./types";

export const modules: Module[] = [
  {
    id: 1,
    icon: "🔍",
    title: "Understanding You & Others",
    summary:
      "<p>This module focuses on self-awareness and understanding team members' engagement styles to enhance team dynamics.</p>",
    submodules: [
      {
        title: "Self-awareness: Understand your engagement style",
        content: `
          <div class="max-w-4xl mx-auto px-4 py-8 bg-white text-gray-800 font-sans">
  <!-- Header section with main image -->
  <div class="mb-10">
    <img src="images/module2/self-awareness.png" alt="Self-awareness: Understand your engagement style" class="w-full max-w-2xl mx-auto rounded-lg shadow-md" />
  </div>

  <!-- Introduction -->
  <div class="space-y-4 mb-8 text-lg">
    <p class="font-medium text-xl text-indigo-700">Ever wonder why you instantly click with some people yet butt heads with others?</p>
    <p>Turns out there's a scientific reason that has to do with how our brain is wired.</p>
    <p>Brain behavior preferences influence things like our strengths, communication style and even what we find stressful.</p>
    <p>According to brain-based models, there are <span class="font-semibold">four engagement profiles or preferences</span>.</p>
    <p>As we go through the course, take some notes on how these might relate to you.</p>
    <p>These will give you insight into your inherent strengths that can make you a better team player. Here they are.</p>
  </div>

  <!-- Engagement Styles Image -->
  <div class="my-10">
    <img src="images/module2/engagement_styles.png" alt="The four engagement styles: Goal-driven, Task-driven, Vision-driven, and People-driven" class="w-full max-w-2xl mx-auto rounded-lg shadow-md" />
  </div>

  <!-- Engagement Types Overview -->
  <div class="space-y-4 mb-8">
    <p class="text-lg">We have goal-driven, task-driven, vision-driven and people-driven engagement. Typically, we prefer one or two of these.</p>
    <p class="text-lg mb-6">This explains why we click with certain people because we share the same preferences.</p>
  </div>

  <!-- Detailed Descriptions of Engagement Types -->
  <div class="grid md:grid-cols-2 gap-6 mb-10">
    <!-- Goal-driven -->
    <div class="bg-blue-50 p-6 rounded-lg shadow-sm">
      <h3 class="text-xl font-bold text-blue-700 mb-3">Goal-driven</h3>
      <p>A goal-driven preference reflects an analytical approach, a focus on facts and figures, on identifying goals and prioritizing efficiency.</p>
      <p class="mt-2">You naturally analyze data and like to seek trends.</p>
    </div>

    <!-- Task-driven -->
    <div class="bg-green-50 p-6 rounded-lg shadow-sm">
      <h3 class="text-xl font-bold text-green-700 mb-3">Task-driven</h3>
      <p>If you are usually early to meetings, like to follow an agenda, love your to-do lists and enjoy planning meticulously, you might be task driven.</p>
      <p class="mt-2">You'll find yourself more interested in what's happening in the present.</p>
      <p class="mt-2">Are processes being followed, quality control and compliance.</p>
    </div>

    <!-- Vision-driven -->
    <div class="bg-purple-50 p-6 rounded-lg shadow-sm">
      <h3 class="text-xl font-bold text-purple-700 mb-3">Vision-driven</h3>
      <p>You like establishing order, maybe you're vision driven, where you enjoy driving change and taking risks, experimenting and thinking outside the box in your work.</p>
      <p class="mt-2">And you might catch yourself thinking about the future and about how things fit into the big picture.</p>
    </div>

    <!-- People-driven -->
    <div class="bg-red-50 p-6 rounded-lg shadow-sm">
      <h3 class="text-xl font-bold text-red-700 mb-3">People-driven</h3>
      <p>Or you might be just like me a people-driven relationship builder.</p>
      <p class="mt-2">You're team-oriented, communication focused and genuinely care about making sure everyone feels valued and respected.</p>
      <p class="mt-2">Thinking things like who's been impacted and how, before taking steps to solve it.</p>
    </div>
  </div>

  <!-- Call to Action Section -->
  <div class="bg-yellow-50 p-6 rounded-lg shadow-sm mb-10">
    <p class="text-lg font-medium mb-4">So which of the four engagement styles feels most like you?</p>
    <p>Remember, we're talking about how you prefer to engage with your team, not your capabilities.</p>
    <p class="mt-2">Download the exercise file to dig in a little more.</p>
    <p class="mt-2">Then find ways to leverage your strengths with your team.</p>
    <p class="mt-2">Maybe volunteer for a new project where your preference sets you up for success or partner with someone whose strengths compliment yours.</p>
  </div>

  <!-- Communication Styles Image -->
  <div class="my-10">
    <img src="images/module2/communication_styles.png" alt="Communication Styles by Brain Preference diagram showing how different brain preferences affect communication approaches" class="w-full max-w-2xl mx-auto rounded-lg shadow-md" />
  </div>

  <!-- Conclusion -->
  <div class="text-center mt-6 text-xl font-medium text-indigo-800">
    <p>You can't necessarily change your brain but you can play to its strengths.</p>
  </div>
</div>`,
        completed: false,
      },
      {
        title: "Other awareness: Engage effectively with your team",
        content: `<div class="mb-8 flex justify-center">
            <img src='images/module2/other_awareness.png' alt='Other awareness: Engage effectively with your team' class='w-full max-w-xl rounded-lg shadow-md'/>
        </div>

        <section class="mb-10">
            <div class="prose prose-lg max-w-none">
                <p class="mb-4 text-lg">People don't come with a user manual but wouldn't it be great if they did?</p>
                
                <p class="mb-4">Well, once you know how you prefer to engage with others, you can then start to figure out the rest of your team and how to engage with them based on their style.</p>
                
                <p class="mb-4">This is what's called <span class="font-semibold text-indigo-600">social perceptiveness</span>, the capacity to recognize what others expect in social situations.</p>
                
                <p class="mb-6">So let's look at how to do this to build trust, foster rapport and create a positive culture.</p>
            </div>
        </section>

        <section class="mb-10 bg-white p-6 rounded-lg shadow-sm">
            <h2 class="text-2xl font-bold text-indigo-600 mb-4">Identifying Teammates' Engagement Styles</h2>
            
            <p class="mb-4">First, we have to identify our teammates engagement styles.</p>
            
            <p class="mb-4">It's not a precise science but people often reveal their preferred style through how they communicate and engage with us.</p>
            
            <p class="pt-2 font-medium text-lg">Think of it as the four Fs:</p>
            
            <div class="grid md:grid-cols-2 gap-6 mt-6">
                <div class="bg-blue-50 p-4 rounded-md">
                    <h3 class="font-bold text-blue-700 mb-2">Facts (Goal-Oriented)</h3>
                    <p>If someone is goal-oriented, you'll often hear them speaking about facts, focused on what's next in achieving goals.</p>
                </div>
                
                <div class="bg-green-50 p-4 rounded-md">
                    <h3 class="font-bold text-green-700 mb-2">Form (Task-Driven)</h3>
                    <p>Those who are task driven often focus on form. They're interested in action plans. They use to-do lists and they might be the only punctual one to team meetings.</p>
                </div>
                
                <div class="bg-purple-50 p-4 rounded-md">
                    <h3 class="font-bold text-purple-700 mb-2">Future (Vision-Driven)</h3>
                    <p>Those who are vision-driven often talk about the future. They might talk about what's possible or enjoy creative brainstorming about future projects.</p>
                </div>
                
                <div class="bg-red-50 p-4 rounded-md">
                    <h3 class="font-bold text-red-700 mb-2">Feeling (People-Oriented)</h3>
                    <p>Those who are people oriented tend to connect with feeling. They might spend extra time sharing a customer story or checking in with you about how your sick grandmother is doing.</p>
                </div>
            </div>
        </section>

        <div class="mb-10 flex justify-center">
            <img src='images/module2/communication_styles.png' alt='Communication Styles by Brain Preference diagram showing how to adapt your communication to different styles' class='w-full max-w-xl rounded-lg shadow-md'/>
        </div>

        <section class="mb-10 bg-white p-6 rounded-lg shadow-sm">
            <h2 class="text-2xl font-bold text-indigo-600 mb-4">Engaging Based on Style Preferences</h2>
            
            <p class="mb-6">Once you have an idea about the preferred style of your team members, engage in a way that's aligned with their preferences:</p>
            
            <div class="space-y-6">
                <div class="border-l-4 border-blue-500 pl-4 py-2">
                    <h3 class="font-bold text-blue-700 mb-2">For Goal-Driven Team Members:</h3>
                    <p>Avoid fluffy conversations. Share facts to substantiate ideas. Use phrases like "Here is what we know" or "Our objective is..."</p>
                </div>
                
                <div class="border-l-4 border-green-500 pl-4 py-2">
                    <h3 class="font-bold text-green-700 mb-2">For Task-Driven Team Members:</h3>
                    <p>Share details and specifics. Give them the structure they crave. Use phrases like "Here are the next steps" or "Here are our deadlines." Create an agenda and stick to it.</p>
                </div>
                
                <div class="border-l-4 border-purple-500 pl-4 py-2">
                    <h3 class="font-bold text-purple-700 mb-2">For Vision-Driven Team Members:</h3>
                    <p>Say things like "Imagine if..." or "Here's how this fits in with the big picture." Give them the opportunity to engage in blue sky thinking to innovate and be creative.</p>
                </div>
                
                <div class="border-l-4 border-red-500 pl-4 py-2">
                    <h3 class="font-bold text-red-700 mb-2">For People-Oriented Team Members:</h3>
                    <p>Ask "How does that feel to you?" or "Have we considered everyone who's impacted?" Check in with them. Give them the opportunity to openly share and to feel heard.</p>
                </div>
            </div>
        </section>

        <section class="mb-10">
            <div class="bg-yellow-50 p-6 rounded-lg">
                <h3 class="text-xl font-bold text-yellow-700 mb-3">Important Note:</h3>
                <p class="mb-4">We need to make sure we're not categorizing or labeling people. We're simply using insights from research to help us better connect.</p>
                <p>Plus, we're helping to create environments where our team members feel heard, which builds trust and deepens relationships.</p>
            </div>
        </section>

        <section class="mb-10 bg-white p-6 rounded-lg shadow-sm">
            <h2 class="text-2xl font-bold text-indigo-600 mb-4">What If You Don't Know Your Team's Styles?</h2>
            
            <p class="mb-4">Now, there will be times when you don't know the style of your team. Maybe you're invited to present a business update to the entire department.</p>
            
            <p class="mb-4">What do you do?</p>
            
            <div class="bg-gray-100 p-5 rounded-lg mt-4">
                <h3 class="font-bold text-gray-700 mb-3">Appeal to All Styles:</h3>
                <ul class="list-disc pl-6 space-y-2">
                    <li>Share objectives</li>
                    <li>Share next steps and deadlines</li>
                    <li>Share how it fits into the strategy and the big picture</li>
                    <li>Share customer stories or employee verbatim feedback</li>
                </ul>
                <p class="mt-4">This ensures that you're delivering a powerful message that's appealing to every possible style.</p>
            </div>
        </section>

        <section class="mb-10">
            <div class="prose prose-lg max-w-none">
                <p class="mb-4">If you can accurately perceive others' preferences, you'll be seen as more cooperative and people will want you on their teams.</p>
                
                <p class="mb-6">And if you can adjust your behavior and style to suit who you're speaking with, it will help you establish yourself as a top team player with influence.</p>
            </div>
        </section>

        <section class="bg-indigo-50 p-6 rounded-lg">
            <h2 class="text-xl font-bold text-indigo-700 mb-3">Next Steps:</h2>
            <p>Next up, you'll learn how to preserve the one thing you never want to lose with your teammates.</p>
        </section>`,
        completed: false,
      },
    ],
  },
  {
    id: 2,
    icon: "🤝",
    title: "Cultivate Trusted Relationships",
    summary: `<p>This module explores the importance of trust in team relationships and provides strategies for building and maintaining it.</p>`,
    submodules: [
      {
        title: "Engage fully with your teammates",
        content: `
        <div class="mb-8">
                    <img src="images/module3/3.1.jpeg" alt="Engage fully with your teammates" class="w-full max-w-lg mx-auto rounded-lg shadow-md" />
                </div>
                
                <div class="space-y-4 text-lg">
                    <p>How would you feel if you and I were having a conversation at work and I kept glancing at my phone?</p>
                    
                    <p>Would you feel somewhat undervalued, that you're not my priority?</p>
                    
                    <p>There are many little things that we unconsciously do that undermine important relationships.</p>
                    
                    <p class="font-semibold text-indigo-700">Listening intently and making teammates feel heard is perhaps the most important skill to strengthening relationships, trust and synergy.</p>
                    
                    <p>Here's a simple framework to help you maintain quality engagement with your teammates.</p>
                    
                    <p class="text-xl font-bold text-center py-4">All you have to do is show the LOVE.</p>
                </div>
                
                <div class="my-8 flex flex-col items-center space-y-6">
                    <img src="images/module3/trust_pyramid.png" alt="Trust pyramid showing the LOVE framework: Lean in & Listen, Open posture, Validate, and Elevate" class="w-full max-w-lg rounded-lg shadow-md" />
                    
                    <img src="images/module3/love_framework_detailed.png" alt="Detailed LOVE Framework diagram showing specific techniques for each component" class="w-full max-w-lg rounded-lg shadow-md" />
                </div>
                
                <div class="mt-10 space-y-6">
                    <section class="bg-indigo-50 p-6 rounded-lg">
                        <h2 class="text-2xl font-bold text-indigo-700 mb-4">L is for Lean in and Listen</h2>
                        <div class="space-y-3">
                            <p>Stop everything, including any background thoughts and be fully present.</p>
                            <p>Lean in slightly and listen intently.</p>
                            <p>Leaning forward slightly indicates interest, while leaning back, dominance.</p>
                            <p>So give off the right non-verbal cues.</p>
                            <p>And if you're virtual, then simulate eye contact by looking at the camera when you're speaking.</p>
                            <p>Make sure you're well lit and use a microphone.</p>
                            <p>Making it easy to see you and hear you matters.</p>
                        </div>
                    </section>
                    
                    <section class="bg-blue-50 p-6 rounded-lg">
                        <h2 class="text-2xl font-bold text-blue-700 mb-4">O is for Open Posture</h2>
                        <div class="space-y-3">
                            <p>Keep arms and palms exposed and resting comfortably on the desk or table, or relaxed at the side of the body, if you're standing.</p>
                            <p>Crossed arms and legs could communicate defensiveness, disinterest, or even superiority, so keep it open.</p>
                            <p>In the right context, of course.</p>
                        </div>
                    </section>
                    
                    <section class="bg-purple-50 p-6 rounded-lg">
                        <h2 class="text-2xl font-bold text-purple-700 mb-4">V is for Validate</h2>
                        <div class="space-y-3">
                            <p>Two ways to validate and reinforce that you're fully present are, clarification;</p>
                            <p>ask follow-up questions to clarify or seek more information.</p>
                            <ul class="list-disc list-inside pl-4 text-purple-800">
                                <li>"What does that mean to you?"</li>
                                <li>"Tell me more about how you came up with that idea."</li>
                            </ul>
                            
                            <p class="mt-4">And reflection;</p>
                            <p>paraphrase what you understood in your own words.</p>
                            <ul class="list-disc list-inside pl-4 text-purple-800">
                                <li>"What I'm hearing is..."</li>
                                <li>"What I understand is that..."</li>
                                <li>"If I understand you correctly..."</li>
                            </ul>
                            
                            <p class="mt-2">Highlight key points and then get the other person to confirm that you've understood them.</p>
                        </div>
                    </section>
                    
                    <section class="bg-green-50 p-6 rounded-lg">
                        <h2 class="text-2xl font-bold text-green-700 mb-4">E is for Elevate</h2>
                        <div class="space-y-3">
                            <p>How do you want your teammates to feel around you?</p>
                            <p>Encouraged, enthusiastic, optimistic?</p>
                            <p>A study published in Psychological Science concluded that without trying or being aware of it, each of us gives out a vibe called <span class="font-semibold">Trait Affective Presence</span>, which influences others' moods.</p>
                            <p>Not only that, there's the phenomena of <span class="font-semibold">Emotional Contagion</span>.</p>
                            <p>So if you are optimistic, your team can catch that state.</p>
                            <p>It's not about faking it, but recognizing that we can consciously elevate our vibe through shifting our attitude and behavior.</p>
                        </div>
                    </section>
                </div>
                
                <div class="mt-10 bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500">
                    <h3 class="text-xl font-bold text-gray-800 mb-4">A Real Example</h3>
                    <div class="space-y-3 italic text-gray-700">
                        <p>Marilyn Monroe was once strolling in downtown New York City with a friend who expressed astonishment at her ability to maintain anonymity in public.</p>
                        <p>Marilyn replied, "That's because I'm walking as Norma Jean. If I walked as Marilyn, everyone would notice me."</p>
                        <p>Her friend, disbelieving, encouraged her to show her what she meant.</p>
                        <p>Instantly, Norma Jean transformed herself into Marilyn Monroe, the movie star.</p>
                        <p>She radiated a certain energy and within minutes she was surrounded by fans.</p>
                    </div>
                </div>
                
                <div class="mt-10 space-y-4">
                    <p class="font-semibold">It's important to be aware of and regulate how you consistently show up to your team because this impacts how they respond, feel and perform.</p>
                    <p>Even if you're a quiet introvert, your vibe exerts influence.</p>
                    
                    <h3 class="text-xl font-bold mt-6">So how do we do this in practice?</h3>
                    <ul class="list-disc list-inside pl-4 space-y-2">
                        <li>Maintain healthy levels of courage and enthusiasm.</li>
                        <li>Use encouraging language and call out small wins and strengths.</li>
                    </ul>
                </div>
                
                <div class="mt-10 bg-indigo-100 p-6 rounded-lg text-center">
                    <h2 class="text-2xl font-bold text-indigo-800 mb-4">Remember to use the LOVE framework to better engage with your teammates:</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-white p-4 rounded shadow">
                            <span class="text-3xl font-bold text-indigo-600">L</span>
                            <p>Lean in and listen</p>
                        </div>
                        <div class="bg-white p-4 rounded shadow">
                            <span class="text-3xl font-bold text-blue-600">O</span>
                            <p>Open posture</p>
                        </div>
                        <div class="bg-white p-4 rounded shadow">
                            <span class="text-3xl font-bold text-purple-600">V</span>
                            <p>Validate</p>
                        </div>
                        <div class="bg-white p-4 rounded shadow">
                            <span class="text-3xl font-bold text-green-600">E</span>
                            <p>Elevate</p>
                        </div>
                    </div>
                </div>
                
                <div class="mt-10 text-center text-gray-700 italic">
                    <p>Coming up, we'll explore how to manage the number one catalyst to friction in working relationships.</p>
                </div>
        `,
        completed: false,
      },
      {
        title: "Manage expectations and foster trust",
        content: `
          <img src='images/module3/3.2.jpeg' alt='Manage expectations and foster trust' style='width:100%; max-width:600px; display:block; margin:20px auto;' />
          <p>In any relationship, at work or otherwise, usually the catalyst to friction is unfulfilled expectations.</p><p>So no matter how much potential you bring to the table, if expectations within your team aren't managed, you'll likely lose their trust, and trust can take a long time to rebuild once lost.</p>
                  <section class="mb-8">
            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 class="text-xl font-semibold text-indigo-600 mb-3">Two Types of Trust</h2>
                <p class="mb-4">There are two types of trust in teams, <span class="font-medium">integrity-based trust</span>: I trust your motives and <span class="font-medium">competency-based trust</span>, I trust your skills.</p>
                <p class="mb-4">You need both.</p>
                <div class="bg-indigo-50 p-4 rounded-md border-l-4 border-indigo-400">
                    <p class="mb-2">For example, if you're given a deadline of five days, and you deliver the work in three, you're a superstar demonstrating both integrity-based and competence-based trust because you delivered within the agreed timeframe.</p>
                    <p>But if you tell your team you can get it done in two days and it takes three, sure, the time it took is still three days, but you violated integrity-based trust.</p>
                </div>
                <p class="mt-4">You didn't manage expectations and eroded your trustworthiness.</p>
            </div>
        </section>

        <section class="mb-8">
            <h2 class="text-2xl font-bold text-indigo-700 mb-4">Three Rules to Maintaining Your Trustworthiness</h2>
            
            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 class="text-lg font-bold text-indigo-600 mb-2">1. Commit and Deliver</h3>
                <ul class="list-disc pl-5 space-y-2">
                    <li>If you commit to it, do it.</li>
                    <li>If you know in advance you won't be able to do something, manage expectations early.</li>
                    <li>Tell the person there's going to be a delay or try to seek assistance.</li>
                    <li>And if you don't know how to do it, seek support.</li>
                </ul>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 class="text-lg font-bold text-indigo-600 mb-2">2. Put it in Writing</h3>
                <p class="mb-4">Have you ever delivered work to your team leader only to get, "This isn't what I asked for," yet, you're certain that that's what was requested in your last meeting?</p>
                <p class="mb-4">Unfortunately, there's no way to prove it.</p>
                <p class="mb-4">The same applies when you casually tell a team member that the report will be delayed by a day, but they forget the conversation ever happened and now think you're unreliable.</p>
                <p class="mb-4">The solution, document accountabilities, and email expectations.</p>
                
                <div class="bg-gray-100 p-4 rounded-md mt-4">
                    <p class="font-medium mb-2">Three important questions you need to get agreement on:</p>
                    <ol class="list-decimal pl-5 space-y-1">
                        <li><span class="font-medium">What</span> specifically needs to be done?</li>
                        <li><span class="font-medium">When</span> is the deadline?</li>
                        <li><span class="font-medium">Who</span> is responsible?</li>
                    </ol>
                </div>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-lg font-bold text-indigo-600 mb-2">3. Set Boundaries</h3>
                <p class="mb-4">What if you are at full-capacity, and your team delegates you an additional urgent task to complete?</p>
                <p class="mb-4">Don't accept if there's going to be an issue with delivering on time without first communicating with the team.</p>
                
                <div class="bg-green-50 p-4 rounded-md border-l-4 border-green-400 mb-4">
                    <p class="font-medium mb-1">Here's a simple two-step approach to respond:</p>
                    <ol class="list-decimal pl-5 space-y-2">
                        <li><span class="font-medium">First, positive-first response:</span><br>
                            "Sure, I can take that on."</li>
                        <li><span class="font-medium">Followed by: request a solution:</span><br>
                            "Can you help me reprioritize what's on my list so I work on what's most urgent?"</li>
                    </ol>
                </div>
                
                <p class="mb-4">Why is this so effective?</p>
                <blockquote class="pl-4 border-l-4 border-indigo-300 italic">
                    A 2021 study published in "Harvard Business Review" found that managers either didn't know or couldn't remember 60% of the work their teams do.
                </blockquote>
                <p class="mt-4">So it's plausible that the rest of the team won't know the extent of your workload either.</p>
                <p class="mt-2">Once you take them through your list, they might realize everything on it is urgent and delegate it to someone else or offer their help.</p>
            </div>
        </section>      
        <section class="p-6 rounded-lg shadow-md mb-6">
            <p>Remember, managing expectations is crucial in teams. Be a person of integrity that can be relied upon.</p>
        </section>
          <img src='images/module3/trustworthiness.png' alt='Trustworthiness diagram showing the importance of being reliable and trustworthy in teams' style='width:100%; max-width:600px; display:block; margin:20px auto;' />
          `,
        completed: false,
      },
      {
        title: "Foster psychological safety",
        content: `
          <div class="mb-8">
                    <img src="images/module3/3.3.jpeg" alt="Foster psychological safety" class="w-full max-w-lg mx-auto rounded-lg shadow-md" />
                </div>
                
                <div class="space-y-4 text-lg">
                    <p>Google conducted a major internal study to identify the key dynamics of successful teams.</p>
                    
                    <p>After two years, 200 interviews and the mapping of over 250 attributes, what do you think came out as the most important?</p>
                    
                    <p class="font-semibold text-teal-700">Psychological safety, which simply means that members of a team feel that they can speak freely without being rejected, judged, or criticized.</p>
                    
                    <p>People often hold back from expressing concerns and opinions if there is a risk of being perceived negatively so they self censor and maintain an inauthentic image to fit in with the team.</p>
                    
                    <p>The good news is that you can encourage psychological safety within your team with these five practices.</p>
                </div>
                
                <div class="my-8 flex justify-center">
                    <img src="images/module3/psychological_safety_practices.png" alt="Psychological Safety Practices diagram showing five key practices: Admit Errors, Throw a Concern Party, Ask for Help, Validate through Expressions, and Be Curious" class="w-full max-w-lg rounded-lg shadow-md" />
                </div>
                
                <div class="mt-10">
                    <ul class="space-y-8">
                        <li class="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
                            <h3 class="text-xl font-bold text-teal-800 mb-3">Admit Errors</h3>
                            <div class="space-y-2">
                                <p>Demonstrate vulnerability and directness.</p>
                                <p>Show others that it's okay if you make an error.</p>
                                <p>This gives others permission to do the same.</p>
                                <p>Reducing fear of judgment.</p>
                            </div>
                        </li>
                        
                        <li class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                            <h3 class="text-xl font-bold text-blue-800 mb-3">Become Curious About Mistakes</h3>
                            <div class="space-y-2">
                                <p>What can we learn?</p>
                                <p>What will we do differently going forward?</p>
                                <p>This fosters a growth mindset culture that helps people feel more involved, accountable, and willing to grow.</p>
                            </div>
                        </li>
                        
                        <li class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                            <h3 class="text-xl font-bold text-purple-800 mb-3">Throw a Concern Party</h3>
                            <div class="space-y-2">
                                <p>Take a page out of Google Venture's playbook by encouraging your team to take 10 minutes to individually write down their greatest anxieties about performance, about business uncertainty, anything.</p>
                                <p>Then get them to spend two minutes ranking their anxieties in order of severity.</p>
                                <p>And finally, each one shares their list, inviting opportunities for team support, empathy and solutions.</p>
                            </div>
                        </li>
                        
                        <li class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                            <h3 class="text-xl font-bold text-green-800 mb-3">Ask for Help</h3>
                            <div class="space-y-2">
                                <p>We can't all be experts at everything and sometimes it makes sense to actively seek teammates for their help, skills or views.</p>
                                <p>Asking for help creates permission for others to do the same.</p>
                                <p>Fostering greater collaboration, which leads to better use of talent.</p>
                            </div>
                        </li>
                        
                        <li class="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                            <h3 class="text-xl font-bold text-amber-800 mb-3">Validate Through Expressions</h3>
                            <div class="space-y-2">
                                <p>We respond to people's expressions.</p>
                                <p>Knowing this, when a teammate is speaking and they can see your expression, be present and demonstrate engagement.</p>
                                <p>Validate, nod, smile, look like you're actively listening, it will make a huge difference to how comfortable you make them feel especially those who struggle with speaking up.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <div class="mt-10 bg-gray-100 p-6 rounded-lg">
                    <p class="font-semibold text-xl mb-4">We all have a role to play in creating psychological safety.</p>
                    <p>It's not just the leader or the manager who creates the culture.</p>
                </div>
                
                <div class="mt-8 text-center text-gray-700 italic border-t pt-6">
                    <p>Building on psychological safety, next, we'll dive into practices to enhance your team's collaboration.</p>
                </div>`,
        completed: false,
      },
    ],
  },
  {
    id: 3,
    icon: "🧩",
    title: "Become a Team Culture Creator",
    summary:
      "<p>This module focuses on how to contribute to a positive team culture through collaboration and managing disagreements.</p>",
    submodules: [
      {
        title: "Capitalize on collaboration for team building",
        content: `
        <img src='images/module4/4.1.jpeg' alt='Capitalize on collaboration for team building' style='width:100%; max-width:600px; display:block; margin:20px auto;' />
        <div class="space-y-4 text-lg">
                    <p class="text-xl font-semibold text-center">Collaboration is at the heart of teamwork.</p>
                    
                    <p>And when done right, the team adds up to much more than the sum of its parts.</p>
                    
                    <p class="text-center bg-orange-100 p-4 rounded-lg text-orange-800 font-medium">Here are three powerful practices to help you enhance your team's collaboration.</p>
                </div>
                
                <div class="mt-10 space-y-12">
                    <!-- Practice 1 -->
                    <section class="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                        <h2 class="text-2xl font-bold text-amber-800 mb-4">1. Continually Clarify Context</h2>
                        
                        <div class="space-y-3">
                            <p>Changes are constant and it's vital to continually clarify the team's purpose in the context of the big picture.</p>
                            <p>Without it, the team fragments.</p>
                            
                            <div class="bg-white p-4 rounded-lg shadow-sm mt-4">
                                <ul class="space-y-2 text-amber-900">
                                    <li class="flex items-start">
                                        <span class="inline-block w-4 h-4 bg-amber-500 rounded-full mt-1 mr-2"></span>
                                        <span>What's our organization's purpose?</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="inline-block w-4 h-4 bg-amber-500 rounded-full mt-1 mr-2"></span>
                                        <span>How does our department contribute?</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="inline-block w-4 h-4 bg-amber-500 rounded-full mt-1 mr-2"></span>
                                        <span>How does our team contribute?</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="inline-block w-4 h-4 bg-amber-500 rounded-full mt-1 mr-2"></span>
                                        <span>And finally, if applicable, how does this project contribute?</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    
                    <!-- Practice 2 -->
                    <section class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                        <h2 class="text-2xl font-bold text-blue-800 mb-4">2. The Art of Consultation</h2>
                        
                        <div class="space-y-3">
                            <p>What if your team could achieve that magic balance of allowing the clash of diverse ideas that leverages the collective while maintaining unity and psychological safety?</p>
                            
                            <p>Everyone's opinion is regarded as equally valid with the understanding that optimal decisions are achieved only through building on the collective knowledge.</p>
                            
                            <p>This requires the frank participation of everyone involved.</p>
                            
                            <div class="mt-6">
                                <h3 class="text-lg font-semibold text-blue-700 mb-3">Three Key Principles to Implement Consultation:</h3>
                                
                                <div class="space-y-6">
                                    <!-- Principle 1 -->
                                    <div class="bg-white p-4 rounded-lg shadow-sm">
                                        <h4 class="font-bold text-blue-600 mb-2">Non-Personalization of Ideas</h4>
                                        <p>Get your team to make a pact that whatever is contributed by an individual belongs to the group.</p>
                                        <p>Each member can add to the idea, suggest alternatives and scrutinize without people taking it personally.</p>
                                        <p class="mt-2 italic">So rather than "I disagree with you," you would say "I disagree with the idea because of X."</p>
                                        <p>Provide evidence that argues the counterpoint.</p>
                                    </div>
                                    
                                    <!-- Principle 2 -->
                                    <div class="bg-white p-4 rounded-lg shadow-sm">
                                        <h4 class="font-bold text-blue-600 mb-2">Consider it Candor</h4>
                                        <p>Share ideas, questions, and opinions freely yet in a non-threatening and inclusive way that fosters curiosity and trust.</p>
                                        <p>The purpose is to seek the truth.</p>
                                        <p class="mt-2 italic">For example: "Have we considered the possibility that..."</p>
                                    </div>
                                    
                                    <!-- Principle 3 -->
                                    <div class="bg-white p-4 rounded-lg shadow-sm">
                                        <h4 class="font-bold text-blue-600 mb-2">United Agreement</h4>
                                        <p>Even if a team member is convinced that a decision isn't the best choice, it's better to preserve team unity by supporting the group's decision.</p>
                                        <p>Because unity is what leads a team to continually improve and correct their decisions.</p>
                                        <p class="mt-2">Of course, common sense has to prevail and it doesn't mean the group proceed with any dangerous decision that lacks integrity.</p>
                                        <p>This isn't about creating group think.</p>
                                    </div>
                                </div>
                                
                                <p class="mt-6">Consultation takes practice and the payoff can be immeasurable.</p>
                                <p>Through the trust built, people are empowered to solve problems that require deep collaboration.</p>
                            </div>
                        </div>
                    </section>
                    
                    <!-- Practice 3 -->
                    <section class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                        <h2 class="text-2xl font-bold text-green-800 mb-4">3. Paying it Forward</h2>
                        
                        <div class="space-y-3">
                            <p>Collaborative teams operate with an unspoken rule that they have each other's backs.</p>
                            
                            <p>This idea of paying it forward is called <span class="font-semibold">generalized reciprocity</span>.</p>
                            
                            <div class="bg-white p-4 rounded-lg shadow-sm mt-4">
                                <h4 class="font-bold text-green-600 mb-2">The Science of Helping:</h4>
                                <ul class="space-y-2">
                                    <li class="flex items-start">
                                        <span class="inline-block w-4 h-4 bg-green-500 rounded-full mt-1 mr-2"></span>
                                        <span>The help giver receives a burst of oxytocin.</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="inline-block w-4 h-4 bg-green-500 rounded-full mt-1 mr-2"></span>
                                        <span>The help receiver experiences a burst of oxytocin.</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="inline-block w-4 h-4 bg-green-500 rounded-full mt-1 mr-2"></span>
                                        <span>Others in the team who witness it also receive their own burst of oxytocin, making them more likely to help too.</span>
                                    </li>
                                </ul>
                                <p class="mt-4 text-center font-medium text-green-700">It's the virtuous cycle of cooperation.</p>
                            </div>
                            
                            <p class="mt-4">Consider how you can incorporate paying it forward into your team dynamics.</p>
                        </div>
                    </section>
                </div>
                <div class="mt-8 text-center text-gray-700 italic border-t pt-6">
                    <p>Next up, we're exploring how to deal with the inevitability of disagreements in teams.</p>
                </div>`,
        completed: false,
      },
      {
        title: "Confidently navigate conflict and offer feedback",
        content: `
        <img src='images/module4/Confidently_navigate_conflict.png' alt='Conflict Management diagram showing the importance of managing conflict in teams' class='w-full max-w-lg mx-auto rounded-lg shadow-md my-6' />
        <div class="mb-8">
            <p class="text-lg mb-6">Here are three practical ways to navigate high-friction situations to minimize misunderstandings and protect the integrity of your relationships.</p>
        </div>

        <section class="mb-12 bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-indigo-600 mb-4 border-b border-indigo-200 pb-2">1. Communicating Assertively</h2>
            <p class="mb-4 text-lg font-medium">How do we speak up and call out someone's behavior in a respectful way?</p>
            
            <div class="ml-4 mb-6">
                <h3 class="text-xl font-semibold text-indigo-500 mb-2">Maintain Composure</h3>
                <p class="mb-3">The best way to begin deescalating friction is not to react.</p>
                <p class="mb-3">Take a moment to collect your thoughts.</p>
            </div>
            
            <div class="ml-4 mb-6">
                <h3 class="text-xl font-semibold text-indigo-500 mb-2">Make it About You</h3>
                <p class="mb-3">In the moment, if we act on emotion, we might say, "You are frustrating me," or, "You're so unreasonable," which is a personal attack.</p>
                <p class="mb-3">Instead, we recommend using I-statements, like, "I'm frustrated because this is important to me."</p>
            </div>
            
            <div class="ml-4 mb-6">
                <h3 class="text-xl font-semibold text-indigo-500 mb-2">Meet Face-to-Face</h3>
                <p class="mb-3">When virtual, people tend to use more power strategies, and there can be misunderstandings.</p>
                <p class="mb-3">Try to solve conflicts and disagreements face-to-face where possible.</p>
            </div>
            
            <div class="ml-4">
                <h3 class="text-xl font-semibold text-indigo-500 mb-2">Share Your Interests Rather Than Only Your Position</h3>
                <p class="mb-3">Instead of, "You can't log off early today," which is a position and may not be taken very well, appeal to interests.</p>
                <p class="mb-3">Share why.</p>
                <p class="mb-3 pl-4 border-l-4 border-indigo-300 italic">"It would be really helpful if you could stay until close of business today because my son is sick and I have to pick him up early from school."</p>
                <p class="mb-3">People respond far more positively when they understand your interests.</p>
            </div>
        </section>

        <section class="mb-12 bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-indigo-600 mb-4 border-b border-indigo-200 pb-2">2. Curiosity</h2>
            <p class="mb-4">When the stakes are high, it is too easy to misunderstand someone or become emotionally triggered by someone's words or behavior.</p>
            <p class="mb-4">To avoid a defensive reaction, be curious and use one of these four phrases:</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="bg-indigo-50 p-4 rounded-lg">
                    <p class="font-medium text-indigo-700">"That's interesting."</p>
                </div>
                <div class="bg-indigo-50 p-4 rounded-lg">
                    <p class="font-medium text-indigo-700">"Can you tell me more about that?"</p>
                </div>
                <div class="bg-indigo-50 p-4 rounded-lg">
                    <p class="font-medium text-indigo-700">"What makes you say that?"</p>
                </div>
                <div class="bg-indigo-50 p-4 rounded-lg">
                    <p class="font-medium text-indigo-700">"What made you do that?"</p>
                </div>
                <div class="bg-indigo-50 p-4 rounded-lg">
                    <p class="font-medium text-indigo-700">"What made you think that?"</p>
                </div>
            </div>
            
            <p class="mb-3">Here, you're being curious and seeking additional information to avoid incorrect assumptions.</p>
            <p class="mb-3">These prompts, which are more about the principle than the words themselves, can help to deescalate high-pressure situations and are a valuable addition to your conflict management toolkit.</p>
        </section>

        <section class="mb-12 bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-indigo-600 mb-4 border-b border-indigo-200 pb-2">3. Offering Feedback</h2>
            <p class="mb-4">Here's a simple five-step brain-friendly approach to giving feedback:</p>
            
            <div class="space-y-6">
                <div class="bg-indigo-50 p-4 rounded-lg">
                    <h3 class="text-xl font-semibold text-indigo-600 mb-2">1. Prime with "Yes"</h3>
                    <p>Ask a short question to prime the receiver.</p>
                    <p class="mt-2 pl-4 border-l-4 border-indigo-300 italic">"Do you have five minutes to discuss how the last meeting went?"</p>
                    <p class="mt-2 pl-4 border-l-4 border-indigo-300 italic">"I have some ideas for how to improve the report. Can I share them now?"</p>
                </div>
                
                <div class="bg-indigo-50 p-4 rounded-lg">
                    <h3 class="text-xl font-semibold text-indigo-600 mb-2">2. Authentic Praise</h3>
                    <p>Validate something about the person or their approach.</p>
                    <p class="mt-2 pl-4 border-l-4 border-indigo-300 italic">"You've really stepped up over the last two weeks," or, "Thanks for the extra effort you've invested lately."</p>
                </div>
                
                <div class="bg-indigo-50 p-4 rounded-lg">
                    <h3 class="text-xl font-semibold text-indigo-600 mb-2">3. Provide the Data Point</h3>
                    <p>Specifically mention evidence of what happened.</p>
                    <p>Be specific and factual.</p>
                    <p class="mt-2 pl-4 border-l-4 border-indigo-300 italic">"You said you'd provide the report by 11:00 AM and I didn't receive it until 3:00 PM."</p>
                </div>
                
                <div class="bg-indigo-50 p-4 rounded-lg">
                    <h3 class="text-xl font-semibold text-indigo-600 mb-2">4. Impact Statement</h3>
                    <p>Share how the data point impacted you or the team to provide a sense of meaning and remind them of how their work matters.</p>
                    <p class="mt-2 pl-4 border-l-4 border-indigo-300 italic">"Because I didn't receive the report, I couldn't submit it on time, which has delayed the project's completion."</p>
                </div>
                
                <div class="bg-indigo-50 p-4 rounded-lg">
                    <h3 class="text-xl font-semibold text-indigo-600 mb-2">5. Check In</h3>
                    <p>End with a collaborative question.</p>
                    <p class="mt-2 pl-4 border-l-4 border-indigo-300 italic">"Were you aware of the impact? What's your take on this?"</p>
                    <p class="mt-3">You might also want to check in on the person.</p>
                    <p class="mt-2 pl-4 border-l-4 border-indigo-300 italic">"You are usually such an upbeat part of the team. This is uncharacteristic of you. Is everything okay?"</p>
                    <p class="mt-2 pl-4 border-l-4 border-indigo-300 italic">"How can the team support you?"</p>
                    <p class="mt-3">This sparks real talk, a genuine and meaningful conversation.</p>
                </div>
            </div>
        </section>

        <div class="bg-indigo-100 p-6 rounded-lg shadow-md mb-8">
            <p>Next up, we'll dive into how you can identify and leverage your strengths to optimize your position as a valuable team player.</p>
        </div>`,
        completed: false,
      },
      {
        title: "Identify and leverage strengths",
        content: ` <img src='images/module5/5.1.jpeg' alt='Identify and leverage strengths' class='w-full max-w-lg mx-auto rounded-lg shadow-md my-6' />
        <section class="mb-10 bg-white p-6 rounded-lg shadow-md">
            <div class="prose max-w-none">
                <div class="mb-6">
                    <p class="mb-2">A decade ago, when someone would ask, what are your strengths?</p>
                    <p class="mb-2">I'd reply with all the things I was good at doing.</p>
                    <p class="mb-2">So with a background in law, I'd share, I'm great at multitasking.</p>
                    <p class="mb-2">I have a really analytical approach and I'm exceptionally detail-oriented.</p>
                </div>
                
                <div class="mb-6">
                    <p class="mb-2">But then I came across the work of Marcus Buckingham, one of the world's most prominent researchers on strength in leadership, and my view fundamentally changed.</p>
                    <p class="mb-2">According to Buckingham, a strength is not something that you're simply good at.</p>
                    <p class="mb-2">A real strength is an activity that strengthens you internally, that you look forward to doing.</p>
                    <p class="mb-2">It leaves you feeling energized rather than depleted.</p>
                </div>
                
                <div class="mb-6 bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                    <p class="mb-2">A Gallup study found that focusing on strengths can lead to an almost 20% increase in performance and 73% lower attrition.</p>
                    <p class="mb-2">We're simply happier, more confident, and more self-aware, not to mention more productive, when focusing on strengths rather than weaknesses.</p>
                </div>
            </div>
        </section>

        <section class="mb-10 bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-teal-600 mb-4 border-b border-teal-200 pb-2">The Strenergy Matrix Exercise</h2>
            
            <p class="mb-4">So here's what I invite you to do right now.</p>
            
            <ol class="list-decimal pl-6 space-y-4 mb-6">
                <li>First, download the exercise files and find the document titled Strenergy Matrix.</li>
                <li>In the space provided, list all the things you believe are your strengths.</li>
                <li>Then work through each of them on your list and ask yourself two questions:
                    <ul class="list-disc pl-6 mt-2 space-y-2">
                        <li class="text-teal-700 font-medium">How energized do I feel when I think about this strength?
                            <p class="text-gray-700 font-normal mt-1">This determines whether it strengthens you internally and where it falls on the horizontal axis.</p>
                        </li>
                        <li class="text-teal-700 font-medium">How good am I at it?
                            <p class="text-gray-700 font-normal mt-1">This relates to your proficiency and where it falls on the vertical axis.</p>
                        </li>
                    </ul>
                </li>
                <li>Finally, plot your strengths.</li>
            </ol>
        </section>

        <section class="mb-10">
            <h2 class="text-2xl font-bold text-teal-600 mb-6 text-center">The Strenergy Matrix</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div class="bg-white p-5 rounded-lg shadow-md border-t-4 border-red-400">
                    <h3 class="text-xl font-semibold mb-3 text-red-600">Bottom Left</h3>
                    <p class="italic text-gray-600 mb-2">Low Energy + Low Proficiency</p>
                    <p class="font-medium">How can I avoid these tasks?</p>
                </div>
                
                <div class="bg-white p-5 rounded-lg shadow-md border-t-4 border-yellow-400">
                    <h3 class="text-xl font-semibold mb-3 text-yellow-600">Top Left</h3>
                    <p class="italic text-gray-600 mb-2">Low Energy + High Proficiency</p>
                    <p class="font-medium">How can I do less of these things?</p>
                </div>
                
                <div class="bg-white p-5 rounded-lg shadow-md border-t-4 border-blue-400">
                    <h3 class="text-xl font-semibold mb-3 text-blue-600">Bottom Right</h3>
                    <p class="italic text-gray-600 mb-2">High Energy + Low Proficiency</p>
                    <p class="font-medium">How can I pursue this as a passion or hobby outside of work?</p>
                </div>
                
                <div class="bg-white p-5 rounded-lg shadow-md border-t-4 border-green-400">
                    <h3 class="text-xl font-semibold mb-3 text-green-600">Top Right</h3>
                    <p class="italic text-gray-600 mb-2">High Energy + High Proficiency</p>
                    <p class="font-medium">How can I do more of these things?</p>
                </div>
            </div>
        </section>

        <section class="bg-teal-50 p-6 rounded-lg shadow-md mb-8">
            <h3 class="text-xl font-bold text-teal-700 mb-4">Team Strengths</h3>
            <p class="mb-3">When you can contribute your strengths, everyone wins.</p>
            <p class="mb-3">It's also important to encourage others to contribute their strengths to the team too.</p>
            <p class="mb-3">The best teams know each other's strengths, how to get the best out of one another, and how to energize each other so that everyone performs harmoniously.</p>
            <p class="font-medium text-teal-800">This is how you can become a team culture creator.</p>
        </section>`,
        completed: false,
      },
    ],
  },
  {
    id: 5,
    icon: "💡",
    title: "Expand Your Strategic Mindset",
    summary: `<p>This module provides techniques to develop a strategic mindset for proactive and innovative team contributions.</p>`,
    submodules: [
      {
        title: "Hone your strategy skills",
        content: `  <img src="images/module6/6.1.jpeg" alt="Strategic Mindset diagram showing the importance of strategic thinking in teams" class="w-full max-w-xl mx-auto block rounded-md mb-6" />
  <p class="text-lg text-gray-700 mb-4">High performing teams need team members who are able to think strategically in order to be proactive, adaptable, and innovative, and this helps you stand out as a key contributor.</p>
  <p class="text-lg text-gray-700 mb-6">Here are five surprisingly easy ways you can reconfigure your thinking to be more strategic:</p>
  <img src="images/module6/strategic_thinking.png" alt="Strategic Thinking diagram showing five key components: Ask Strategic Questions, Consider Alternatives, Identify Gaps, Conduct a Post-Mortem, and Develop your Solution-Orientation" class="w-full max-w-xl mx-auto block rounded-md mb-6" />
  <div class="mb-4">
    <p class="font-semibold text-gray-800 mb-2">Ask strategic questions,</p>
    <ul class="list-disc list-inside text-gray-700">
      <li>for example how are we differentiating ourselves to competitors?</li>
    </ul>
  </div>
  <img src="images/module6/strategic_questions.png" alt="Strategic Questions diagram showing three key questions: What, Why, and How" class="w-full max-w-xl mx-auto block rounded-md mb-6" />
  <ul class="list-disc list-inside text-gray-700 mb-4">
    <li>Where will our growth come from in the next five years?</li>
    <li>How could we respond to the threat presented by potentially disruptive competitors?</li>
  </ul>
  <div class="mb-4">
    <p class="font-semibold text-gray-800 mb-2">Ask why.</p>
    <p class="text-gray-700 mb-2">Develop a habit of often asking yourself why am I doing this?</p>
    <p class="text-gray-700">This reminds you of the big picture, and aligns your decision making with the team and company goals.</p>
  </div>
  <div class="mb-4">
    <p class="font-semibold text-gray-800 mb-2">Consider alternatives using inversion.</p>
    <p class="text-gray-700 mb-2">If you're solving a problem think about the worst case scenario really.</p>
    <p class="text-gray-700 mb-2">For example you explore all the potential risks and concerns, including if this was to fail what could have caused the failure?</p>
    <p class="text-gray-700">If we ran out of resources, what would we do?</p>
    <p class="text-gray-700">By considering weaknesses in advance you're better able to prepare for and mitigate them before they arise.</p>
  </div>
  <div class="mb-4">
    <p class="font-semibold text-gray-800 mb-2">Identifying gaps, address these four priority areas.</p>
    <ul class="list-disc list-inside text-gray-700">
      <li><span class="font-semibold">Vision,</span> how does this fit in with the big picture.</li>
      <li><span class="font-semibold">Goal,</span> what are the facts and what's the immediate objective?</li>
      <li><span class="font-semibold">People,</span> who is impacted, and how have we engaged them and how do they feel about this.</li>
      <li><span class="font-semibold">Task,</span> what needs to be done to make this happen?</li>
    </ul>
  </div>
  <div class="mb-4">
    <p class="font-semibold text-gray-800 mb-2">Conduct a post-mortem.</p>
    <p class="text-gray-700 mb-2">In the world of management, a post-mortem is a post-implementation review.</p>
    <p class="text-gray-700 mb-2">Once you finished a project reflect on what went well and what didn't.</p>
    <ul class="list-disc list-inside text-gray-700">
      <li>What could be better next time?</li>
      <li>What were the gaps?</li>
      <li>What do you wish you knew when you started?</li>
    </ul>
    <p class="text-gray-700 mb-2">You can even take this a step further and do this with your team.</p>
    <p class="text-gray-700">Doing these regularly helps to build a habit of strategic thinking and the more you do it, the better you get.</p>
  </div>`,
        completed: false,
      },
      {
        title: "Develop your solution-orientation",
        content: `<img src="images/module6/solution_orientation.png" alt="Solution Orientation diagram showing the importance of solution orientation in teams" class="w-full max-w-xl mx-auto block rounded-md mb-6" />
  <p class="text-lg text-gray-700 mb-2">How you show up when you're with your team matters more than you realize.</p>
  <p class="text-lg text-gray-700 mb-6">Solution orientation is a critical skill that encourages everyone in the team to work together towards finding solutions rather than just pointing out problems. Here are three tips to cultivate your solution orientation.</p>
  <img src="images/module6/solution_orientation_src.png" alt="Solution Orientation diagram showing three key components: Language Reframing, Collective Curiosity, and Offer Solutions" class="w-full max-w-xl mx-auto block rounded-md mb-6" />
  <ul class="list-disc ml-6 text-gray-700">
    <li class="mb-4">
      <p class="font-semibold text-gray-800 mb-2">Language reframing.</p>
      <p class="mb-2">This is a technique that involves changing the way that we talk about a problem to make it more amenable to solutions.</p>
      <p class="mb-2">For example, reframe problem to opportunity.</p>
      <p class="mb-2">Let's say your company is facing financial difficulties.</p>
      <p class="mb-2">Rather than saying, "<span class="italic">We are in financial trouble and don't know what to do</span>," you could say, "<span class="italic">We see this as an opportunity to reevaluate our business model and find new ways to increase revenue and cut costs, improving our financial health in the long run.</span>"</p>
      <p class="mb-2">This way, you're more open-minded to creative solutions and can emerge from the situation even stronger than before.</p>
      <p class="mb-2">Another example is reframing failure to learning experience.</p>
      <p class="mb-2">Let's say you perform poorly in a client pitch.</p>
      <p class="mb-2">Rather than saying, "<span class="italic">I can't believe this happened.</span></p>
      <p class="mb-2"><span class="italic">I failed</span>," reframe to, "<span class="italic">I see this as a learning experience.</span></p>
      <p class="mb-2"><span class="italic">I'll prepare better and get feedback so I do better with the next pitch.</span>"</p>
      <p>This way, you're more proactive, rather than feeling defeated.</p>
      <p>These simple shifts in language can have a profound effect on how we approach the problem, encouraging us to think more positively and creatively.</p>
    </li>
    <li class="mb-4">
      <p class="font-semibold text-gray-800 mb-2">Collective curiosity.</p>
      <p class="mb-2">A true solution orientation requires you to ask curious questions to the root of the issue and to think more creatively.</p>
      <p class="mb-2">By asking how questions, teams can begin to explore different approaches and creative solutions.</p>
      <p>For example, if a team is struggling with sticking to budget, they might ask questions like, how can we reduce costs without sacrificing quality?</p>
      <p>Or how can we use existing resources more efficiently?</p>
    </li>
    <li>
      <p class="font-semibold text-gray-800 mb-2">Offer solutions.</p>
      <p class="mb-2">Rather than just complaining about a problem or a task, brainstorm at least three potential solutions along with pros and cons. This not only helps you develop a skill called cognitive flexibility, it also helps the team move forward faster and makes it easier to identify what solution's going to work best.</p>
    </li>
  </ul>
  <br />
  <p class="text-lg text-gray-700 mb-2">By incorporating solution orientation into your day-to-day thinking, you can become an invaluable asset to any team.</p>
  <p class="text-lg text-gray-700 mb-2">Not only will you be able to identify problems and offer solutions, but you'll also encourage the team to work together towards finding the best solution.</p>
  <p class="text-lg text-gray-700 mb-2">This can help create a more collaborative environment that leads to better results.</p>
  <p class="text-lg text-gray-700">You'll find reflection questions and a summary in the exercise files, along with space to make your own commitments.</p>`,
        completed: false,
      },
    ],
  },
];
