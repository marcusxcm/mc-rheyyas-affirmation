"use client";

import { useState, useCallback, useEffect } from "react";

const AFFIRMATIONS: Record<string, string[]> = {
  "Self Love": [
    "I am worthy of love exactly as I am.", "My presence is a gift to the world.", "I choose myself every single day.", "I am enough — always have been, always will be.", "I radiate beauty, confidence, and grace.", "My worth is not determined by anyone's opinion.", "I deserve all the good things coming my way.", "I am deeply and completely lovable.", "I treat myself with the kindness I deserve.", "I am proud of the woman I am becoming.",
    "I honor my needs without apology.", "My body is a vessel of strength and beauty.", "I release the need for external validation.", "I am my own safe place.", "I fall in love with myself a little more each day.", "I forgive myself for the times I didn't know better.", "My feelings are valid and worthy of space.", "I am the author of my own story.", "I choose thoughts that nourish me.", "I am a priority in my own life.",
    "I set boundaries because I respect myself.", "I celebrate who I am right now.", "My imperfections are part of my beauty.", "I release comparison — my path is my own.", "I speak to myself with love and patience.", "I am becoming more confident every day.", "I trust my instincts completely.", "I am allowed to take up space.", "I am my own greatest champion.", "I carry myself with dignity and grace.",
    "I love the person I see in the mirror.", "I am whole, not broken.", "My value is inherent, not earned.", "I choose to see the best in myself.", "I am gentle with myself through hard seasons.", "I am worthy of the love I give to others.", "I release guilt and embrace joy.", "I deserve rest, pleasure, and peace.", "I am beautifully and uniquely made.", "I accept myself completely and unconditionally.",
    "Every part of me deserves love — even the parts I'm still working on.", "I trust the woman I am evolving into.", "I nourish my soul daily.", "I am not my mistakes — I am what I learn from them.", "I show up for myself the way I show up for others.", "My growth is not a performance for anyone.", "I deserve a love that doesn't have to be earned.", "I release shame and step into grace.", "I am magnetic because I am authentic.", "I choose me — today and every day.",
    "I let go of who I thought I should be and embrace who I am.", "My worth is not tied to my productivity.", "I am patient with my own becoming.", "I deserve the same compassion I give freely to others.", "I trust my own judgment.", "I am allowed to change my mind.", "I am not too much — I am exactly enough.", "My heart is open to giving and receiving love.", "I honor the journey, not just the destination.", "I am safe to be fully myself.",
    "I am learning to love myself fiercely.", "My energy is sacred and I protect it.", "I choose joy as an act of self-love.", "I let beauty into my life freely.", "I am worthy of my own attention and care.", "My voice matters.", "I release the pressure to be perfect.", "I am at peace with where I am.", "I trust that I am exactly where I need to be.", "I am proud of how far I've come.",
    "I hold myself with tenderness on hard days.", "I am a work of art still being painted.", "I choose growth over comfort.", "I love myself through every version of who I become.", "I am grounded in my own sense of self.", "I breathe in self-love and breathe out self-doubt.", "I deserve a life I am excited about.", "I am kind to myself in the quiet moments.", "I celebrate my small wins every day.", "I am the love I've been looking for.",
    "My softness is not weakness — it is strength.", "I let go of the need to be understood by everyone.", "I am complete as I am.", "My confidence grows stronger every day.", "I am allowed to outgrow people and situations.", "I choose to believe the best about myself.", "I release negative self-talk and speak life over myself.", "I am deserving of a beautiful, abundant life.",
  ],
  Strength: [
    "I am stronger than any challenge I face.", "Every obstacle shapes me into something greater.", "I rise every time I fall — that's my superpower.", "I carry the strength of every woman before me.", "I am resilient, powerful, and unstoppable.", "Challenges are just opportunities in disguise.", "I face fear and move forward anyway.", "My strength grows with every battle I survive.", "I am built for this.", "Nothing can dim the light that shines from within.",
    "I have overcome 100% of my hardest days.", "My courage is greater than my fear.", "I bend but I do not break.", "I am a force of nature.", "I walk through fire and come out gold.", "I choose to be powerful.", "I have everything I need to handle what comes.", "My resilience is unmatched.", "I am not a victim — I am a victor.", "I draw on an infinite well of inner strength.",
    "My past struggles are my greatest teachers.", "I am more capable than I give myself credit for.", "I keep going even when it's hard.", "I am a warrior dressed in grace.", "Every storm I've weathered has made me wiser.", "I stand firm in who I am.", "I face uncertainty with courage.", "My willpower is stronger than any temptation.", "I do hard things with ease and confidence.", "I am not afraid to start over.",
    "I am the calm in the center of every storm.", "I trust my ability to figure things out.", "I push past limits that others accept.", "I choose discipline over comfort.", "I rise above circumstances that try to hold me down.", "My inner strength is unshakeable.", "I am relentless in my pursuit of growth.", "I recover faster than I fall.", "I meet every challenge with grace and power.", "I am built from the toughest version of love.",
    "I have survived everything life has thrown at me.", "I face adversity head on.", "I don't quit — I adapt.", "I am the definition of perseverance.", "My strength is quiet, deep, and real.", "I do not shrink in the face of opposition.", "I trust the resilience inside me.", "I am powerful beyond my own understanding.", "I fight for what matters with everything I have.", "I am bigger than any problem in front of me.",
    "My mind is strong, focused, and unbreakable.", "I am not limited by my past.", "I transform pressure into power.", "I have already survived what tried to stop me.", "I meet hard moments with steady breath.", "I carry myself with the confidence of someone who knows they'll be okay.", "I choose to be brave even when I'm scared.", "I am proof that strength comes from within.", "I take on challenges as training for the next level.", "My endurance is extraordinary.",
    "I am not waiting to be saved — I save myself.", "I stand tall in every room I walk into.", "I am iron-willed and gold-hearted.", "My grit and grace work together.", "I turn my wounds into wisdom.", "I am not easily broken.", "I have fire in my soul that cannot be extinguished.", "I am empowered to create change.", "I grow stronger every time I choose myself.", "I rise with the sun and I rest like a warrior.",
    "Every scar I carry is proof of my survival.", "I am anchored in who I am when storms come.", "I am fearless in the pursuit of what sets my soul on fire.", "I turn setbacks into setups for my comeback.", "I was made for hard things.", "My strength is a legacy I pass forward.", "I trust the power within me completely.", "I face every day with conviction and courage.", "I am the hero of my own story.", "I fight with love, move with purpose, and stand with strength.",
    "No mountain is too high for a woman who believes in herself.", "I do not run from difficulty — I run toward it.", "I am a diamond — pressure is what made me.", "I face every obstacle knowing I've beaten harder ones.", "My courage multiplies the more I use it.", "I am brave enough to begin.", "I am strong enough to finish.",
  ],
  Abundance: [
    "Wealth flows to me naturally and effortlessly.", "I am a magnet for abundance and opportunity.", "Money is a tool, and I use it wisely.", "I deserve financial freedom and I'm building it.", "Opportunities find me everywhere I go.", "I attract success in everything I pursue.", "My future is overflowing with prosperity.", "I am open to receiving all the universe offers.", "Abundance is my birthright.", "I create value and value returns to me multiplied.",
    "I am worthy of wealth and I welcome it.", "Money comes to me in expected and unexpected ways.", "I release scarcity and embrace limitless possibility.", "Every day I grow closer to financial independence.", "I am a powerful creator of wealth.", "Prosperity follows me wherever I go.", "I have more than enough.", "My income grows consistently and abundantly.", "I attract high-value people, deals, and opportunities.", "I am financially free and fully alive.",
    "I deserve to be paid well for what I do.", "My gifts and talents generate great wealth.", "I invest in myself and the return is extraordinary.", "I am building generational wealth.", "Every dollar I spend returns to me multiplied.", "I am aligned with the frequency of abundance.", "My mindset creates my financial reality.", "I receive large sums of money with gratitude.", "I am at peace with my finances and they grow in peace.", "I make smart decisions with money.",
    "I attract clients, contracts, and cash with ease.", "Wealth is a natural expression of my purpose.", "The universe is always conspiring in my favor.", "Abundance is not luck — it's alignment, and I am aligned.", "I think abundantly and live abundantly.", "I deserve luxury, comfort, and security.", "My ideas turn into income.", "I step into every opportunity with confidence.", "I am financially secure and continuously growing.", "I am not afraid of money — I know how to make it work.",
    "I am capable of creating extraordinary financial results.", "The right opportunities always find me at the right time.", "I am a woman who builds empires.", "I am becoming wealthier every day.", "My dreams are funded.", "I believe in the value I bring to the world.", "Success is inevitable for me.", "My network is my net worth and both grow daily.", "I release old money stories that don't serve me.", "I am the CEO of my own abundant life.",
    "I am generous because I always have more than enough.", "Abundance flows through me, not just to me.", "I see opportunity where others see obstacles.", "I am wealthy in money, time, health, and love.", "I attract everything I need at exactly the right moment.", "My financial life is thriving.", "I take bold action and bold results follow.", "Money is attracted to my energy.", "I live a life of financial freedom and joy.", "I am worthy of a seven-figure life.",
    "I move through the world like someone who expects great things.", "Every morning I wake up to new possibilities.", "My capacity for receiving is expanding daily.", "I manifest abundance through consistent action.", "I am disciplined enough to build the life I want.", "I choose abundance thinking in every situation.", "I am not chasing success — it's running toward me.", "Doors open for me that have never opened before.", "I own my worth and charge accordingly.", "My financial ceiling keeps rising.",
    "I trust that what is meant for me will find me.", "I am building something that will outlast me.", "I make money doing what I love.", "I am a powerful force in creating wealth.", "My ambition is backed by divine favor.", "I release fear and run toward opportunity.", "I attract abundance by being fully myself.", "My wealth grows because my mindset is wealthy.", "I believe in my ability to build and sustain wealth.", "I invest in my future every single day.",
    "My vision for my life is big enough to fund it.", "I step into prosperity without guilt.", "I am aligned with success on every level.", "I am bold, resourceful, and unstoppable in creating abundance.",
  ],
  Peace: [
    "I release what I cannot control.", "My mind is calm. My heart is at peace.", "I breathe in serenity, I breathe out tension.", "This moment is enough.", "I choose peace over perfection.", "I am allowed to rest and restore.", "My nervous system is safe. I am safe.", "I let go of what no longer serves me.", "Stillness is my power source.", "I trust the timing of my life.",
    "I don't have to have all the answers right now.", "Peace is my natural state and I return to it easily.", "I release urgency and embrace ease.", "I am grounded, centered, and calm.", "I allow good things to come to me without forcing them.", "I am not in a rush — divine timing is always perfect.", "Worry has no place in my heart today.", "I release the past and arrive fully in the present.", "My heart is a sanctuary of peace.", "I am gentle with myself in uncertain seasons.",
    "I exhale and let go of what was never mine to carry.", "I trust that everything is working out for me.", "I find beauty in the stillness.", "I am not defined by chaos — I am the eye of the storm.", "I release anxiety and welcome clarity.", "Peace is something I actively choose every day.", "I surrender control and find freedom in it.", "The present moment is where I find my power.", "I am free from the weight of yesterday.", "I am at ease in my own skin.",
    "I let life flow through me, not over me.", "I trade overwhelm for presence.", "I am healing, even when I can't feel it.", "I give myself permission to slow down.", "My thoughts are quiet. My spirit is still.", "I choose calm over chaos, always.", "I don't have to earn rest — I deserve it.", "I am protected, guided, and at peace.", "I allow myself to simply be.", "Tranquility lives within me and travels with me.",
    "I release the stories that create suffering.", "I don't carry what was never mine to hold.", "My peace is not dependent on outside circumstances.", "I find peace in who I am, not what I do.", "I breathe deeply and trust completely.", "I let peace lead the way.", "I am not behind — I am exactly where I'm supposed to be.", "I make peace with my past so it doesn't define my future.", "I create stillness in my daily life.", "My heart beats in perfect rhythm with peace.",
    "I choose to see situations through the lens of calm.", "I am anchored in the present moment.", "I let go of needing to understand everything.", "Peace is my response to anything that tries to disturb me.", "I release tension from my mind, body, and spirit.", "I honor my need for quiet and restoration.", "I don't react — I respond from a place of peace.", "I let beauty and ease into my life.", "I am a vessel of calm for myself and those around me.", "I give my worries to the universe and trust the outcome.",
    "I release perfectionism and rest in grace.", "Every breath I take fills me with peace.", "I am free from fear and full of trust.", "Peaceful moments are gifts I give myself daily.", "I choose thoughts that bring me back to center.", "I soften where I've been rigid and let life flow.", "I no longer fight what is — I lean into what could be.", "My soul is at rest even when life is loud.", "I find peace in letting go.", "I trust the quiet whisper of my intuition.",
    "I am held, supported, and deeply at peace.", "Serenity is not something I seek — it's something I am.", "I rest in the knowing that all is well.", "I am free of anxiety and full of calm.", "My body relaxes with every deep breath.", "I trust the process of life.", "I am peaceful, present, and whole.",
  ],
  Growth: [
    "Every day I evolve into a better version of myself.", "My potential is limitless.", "I embrace change as the gateway to growth.", "I am always learning, always expanding.", "Progress, not perfection, is my standard.", "I invest in myself because I am worth it.", "My past does not define my future.", "I am transforming in ways I cannot yet see.", "I trust the process of becoming.", "Growth is happening, even when I can't feel it.",
    "I am committed to becoming the best version of myself.", "Every experience teaches me something valuable.", "I choose growth over comfort every single time.", "I am not afraid of who I'm becoming.", "I welcome challenges as catalysts for change.", "My evolution is continuous and intentional.", "I learn fast and adapt faster.", "I am a student of life and I never stop learning.", "The discomfort I feel is proof I'm growing.", "I am becoming more aligned with my purpose every day.",
    "I show up for my growth even when it's uncomfortable.", "I take responsibility for the life I'm creating.", "I turn every lesson into fuel.", "I am not the same person I was a year ago — I am better.", "I celebrate who I was while becoming who I'm meant to be.", "My mindset evolves as I evolve.", "I ask better questions and find better answers.", "I surround myself with people who elevate me.", "I read, learn, and apply daily.", "I am always upgrading my thinking.",
    "My character deepens as I grow.", "I trade old habits for ones that serve my highest self.", "I am not afraid to outgrow what used to fit.", "Every version of me was necessary.", "I choose evolution over stagnation.", "I commit to the long game.", "I build habits that compound into greatness.", "My future self is proud of what I'm doing today.", "Growth is not an event — it's a lifestyle.", "I am disciplined in my personal development.",
    "I never stop asking who I could become.", "I honor the version of me that got me here and welcome the one emerging.", "I am willing to be a beginner again.", "Every day I become more of who I was created to be.", "I make time for the things that make me better.", "I am deeply invested in my own transformation.", "I reflect, recalibrate, and recommit.", "I step into new chapters without fear.", "My growth inspires others without me even trying.", "I am hungry for knowledge and wisdom.",
    "I acknowledge how much I have already grown.", "I am always one decision away from a better life.", "I expand my comfort zone daily.", "I lean into feedback and use it to sharpen my edge.", "I am becoming wiser, stronger, and more purposeful.", "My vision for my life grows bigger as I grow.", "I embrace the messy middle of transformation.", "I push past my own limits every single day.", "I am constantly evolving and I love it.", "Growth and joy coexist in my life.",
    "I release old patterns and embrace new ones.", "I am the result of my consistent effort.", "My becoming is beautiful even in its roughness.", "I take bold steps toward the life I want.", "I show up as a beginner when needed and a master when ready.", "I am always in motion — always moving forward.", "I make progress even when no one is watching.", "My discipline today shapes my destiny tomorrow.", "I invest in my mind, body, and spirit without apology.", "I am becoming extraordinary one day at a time.",
    "I honor myself by growing without limits.", "I am proof that people can change for the better.", "My trajectory is upward, always.", "I grow through what I go through.", "Each day brings a new opportunity to level up.", "I trust that every step forward matters.", "I am building the future version of me right now.", "I do the work. I trust the results.", "My growth is a gift to myself and the world.",
  ],
  "Inner Beauty": [
    "My soul is radiant and magnetic.", "Beauty begins the moment I decided to be myself.", "I glow from the inside out.", "My uniqueness is my greatest asset.", "I honor the divine feminine within me.", "I am soft and I am strong — both at once.", "My energy speaks before I even say a word.", "I walk into rooms and shift the atmosphere.", "I am art. I am a masterpiece.", "The way I love is rare and powerful.",
    "There is something magnetic about the way I carry myself.", "I am beautiful in a way that cannot be replicated.", "My light does not compete — it simply shines.", "I embody grace in everything I do.", "My heart is where my true beauty lives.", "The way I see the world is a beautiful gift.", "I am deeply intuitive and that is a form of beauty.", "I radiate warmth wherever I go.", "My kindness is one of my most beautiful qualities.", "I am becoming more beautiful as I become more myself.",
    "I wear my authenticity like a crown.", "My soul has a beauty that transcends the physical.", "I am beautiful because I am genuine.", "The depth of my spirit is breathtaking.", "I carry love in my presence and it touches everyone I meet.", "My laugh is beautiful. My tears are beautiful. All of me is beautiful.", "I am the kind of beautiful that grows over time.", "There is no one else like me and that is stunning.", "I am made of stardust and stories.", "I let my inner light guide the way.",
    "My beauty is not something I earn — it's something I am.", "I have a gentle power that moves mountains.", "I radiate calm, joy, and truth.", "My spirit is luminous.", "I am intricately and beautifully made.", "Beauty lives in the way I love others.", "I am in full bloom.", "There is poetry in the way I exist.", "I carry a beauty that cannot be touched by time.", "My essence is magnetic and rare.",
    "I find beauty in my vulnerability.", "I am a woman of depth, substance, and soul.", "My inner world is rich and breathtaking.", "I shine with the quiet confidence of someone who knows her worth.", "I am tender and fierce — a perfect combination.", "My presence is healing.", "I am a vessel of divine beauty.", "My beauty comes from my courage to be myself.", "I see beauty in who I am and who I am becoming.", "I am a living, breathing work of art.",
    "I don't need to be perfect to be breathtaking.", "The way I love is beautiful.", "My scars are part of my story — and my story is beautiful.", "I am complex, layered, and stunning.", "My spirit is on fire with purpose.", "I am the embodiment of grace under pressure.", "My compassion is one of my most beautiful gifts.", "I walk in beauty every single day.", "My heart is one of the most beautiful things about me.", "I am full of wonder, depth, and light.",
    "Beauty is not just something I have — it's something I share.", "I am whole-heartedly, unapologetically beautiful.", "My soul radiates what my eyes can't always show.", "I carry beauty in my strength.", "I am a rare and precious thing.", "Inner beauty is my foundation and it never fades.", "I am gorgeous — inside and out.", "My femininity is powerful.", "I am divine in my ordinary moments.", "My light is not for dimming — it's for sharing.",
    "I am a woman who leaves a beautiful mark on the world.", "The love I hold inside me is one of my most beautiful features.", "I glow with the quiet fire of someone who knows who she is.", "My beauty is effortless because it is real.", "Every part of me has a beauty all its own.", "I am luminous from the inside out.", "I am beautiful in ways I am still discovering.", "My heart carries a beauty that words can barely hold.",
  ],
};

function getAllAffirmations(): string[] {
  return Object.values(AFFIRMATIONS).flat();
}

function getRandom(arr: string[], exclude?: string): string {
  const pool = exclude ? arr.filter((a) => a !== exclude) : arr;
  return pool[Math.floor(Math.random() * pool.length)];
}

const CATEGORIES = ["All", ...Object.keys(AFFIRMATIONS)];

export default function Home() {
  const [dark, setDark] = useState(true);
  const [category, setCategory] = useState("All");
  const [affirmation, setAffirmation] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [copied, setCopied] = useState(false);

  const pool = category === "All" ? getAllAffirmations() : AFFIRMATIONS[category];

  const generate = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    const next = getRandom(pool, affirmation ?? undefined);
    setTimeout(() => {
      setAffirmation(next);
      setIsAnimating(false);
    }, 180);
  }, [pool, affirmation, isAnimating]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === "Space" && !(e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement)) {
        e.preventDefault();
        generate();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [generate]);

  const copyToClipboard = () => {
    if (!affirmation) return;
    navigator.clipboard.writeText(affirmation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const d = dark;

  return (
    <div
      className="relative min-h-screen flex flex-col items-center overflow-hidden transition-colors duration-300"
      style={{ background: d ? "#0a0a0f" : "#f5f0f7" }}
    >
      {/* Orbs */}
      <div className="orb" style={{ width: 600, height: 600, background: d ? "rgba(255,110,180,0.07)" : "rgba(255,110,180,0.12)", top: -200, left: -150 }} />
      <div className="orb" style={{ width: 500, height: 500, background: d ? "rgba(176,107,255,0.08)" : "rgba(176,107,255,0.1)", bottom: -150, right: -100, animationDelay: "3s" }} />
      <div className="noise" />

      {/* Header */}
      <header className="relative z-10 w-full max-w-3xl flex items-center justify-between px-6 pt-8 pb-2">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
            style={{ background: "linear-gradient(135deg,#ff6eb4,#b06bff)" }}>
            ✦
          </div>
          <div>
            <p className="text-xs font-medium" style={{ color: d ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)" }}>Rheyya</p>
            <p className="text-sm font-semibold" style={{ color: d ? "#fff" : "#111" }}>Affirmations</p>
          </div>
        </div>

        {/* Light/Dark toggle */}
        <button
          onClick={() => setDark(!d)}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
          style={{
            background: d ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)",
            border: `1px solid ${d ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
            color: d ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
          }}
        >
          {d ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>

      {/* Hero */}
      <div className="relative z-10 text-center px-6 pt-20 pb-14">
        <h1 className="text-5xl font-bold tracking-tight mb-4" style={{
          background: "linear-gradient(135deg, #ff6eb4 0%, #b06bff 50%, #6baaff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          You are powerful.
        </h1>
        <p className="text-base" style={{ color: d ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.45)" }}>
          One click. One truth. Let it in.
        </p>
      </div>

      {/* Category chips */}
      <div className="relative z-10 flex flex-wrap justify-center gap-3 px-6 mb-16 max-w-3xl mx-auto">
        {CATEGORIES.map((cat) => {
          const active = category === cat;
          return (
            <button
              key={cat}
              onClick={() => { setCategory(cat); setAffirmation(null); }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px 22px",
                borderRadius: "100px",
                fontSize: "13px",
                fontWeight: 500,
                whiteSpace: "nowrap",
                flexShrink: 0,
                minWidth: "70px",
                height: "38px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                background: active
                  ? "linear-gradient(135deg,rgba(255,110,180,0.2),rgba(176,107,255,0.2))"
                  : d ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
                border: active
                  ? "1px solid rgba(255,110,180,0.5)"
                  : d ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(0,0,0,0.12)",
                color: active ? "#ff6eb4" : d ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.55)",
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Affirmation Card */}
      <div className="relative z-10 w-full max-w-2xl px-6 mb-20">
        <div
          className="glass-card p-14 min-h-64 flex flex-col items-center justify-center text-center relative overflow-hidden transition-all duration-300"
          style={{
            background: d ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.7)",
            border: affirmation
              ? "1px solid rgba(255,110,180,0.25)"
              : d ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(0,0,0,0.08)",
            boxShadow: d ? "none" : "0 8px 40px rgba(0,0,0,0.06)",
          }}
        >
          {affirmation && (
            <div className="absolute inset-0 pointer-events-none" style={{
              background: d
                ? "radial-gradient(ellipse at 50% 50%, rgba(255,110,180,0.06) 0%, transparent 70%)"
                : "radial-gradient(ellipse at 50% 50%, rgba(255,110,180,0.08) 0%, transparent 70%)"
            }} />
          )}

          {!affirmation ? (
            <div className="flex flex-col items-center gap-3">
              <div className="text-5xl mb-1">✨</div>
              <p className="text-lg font-medium" style={{ color: d ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.25)" }}>
                Press the button below
              </p>
              <p className="text-sm" style={{ color: d ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.2)" }}>
                Your affirmation is waiting
              </p>
            </div>
          ) : (
            <div key={affirmation} className="affirmation-text flex flex-col items-center gap-4">
              <p className="text-2xl font-semibold leading-relaxed" style={{
                color: d ? "#fff" : "#1a1a2e",
                textShadow: d ? "0 0 40px rgba(255,110,180,0.2)" : "none",
              }}>
                "{affirmation}"
              </p>
              <button
                onClick={copyToClipboard}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px 22px",
                  borderRadius: "100px",
                  fontSize: "13px",
                  fontWeight: 500,
                  height: "38px",
                  minWidth: "100px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  background: copied
                    ? "rgba(255,110,180,0.15)"
                    : d ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
                  border: `1px solid ${copied ? "rgba(255,110,180,0.5)" : d ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)"}`,
                  color: copied ? "#ff6eb4" : d ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.5)",
                }}
              >
                {copied ? "✓ Copied" : "Copy"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Generate Button */}
      <div className="relative z-10 flex flex-col items-center gap-6 pb-24">
        <button
          onClick={generate}
          style={{
            pointerEvents: isAnimating ? "none" : "auto",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
            minWidth: "360px",
            height: "68px",
            borderRadius: "20px",
            fontSize: "18px",
            fontWeight: 700,
            letterSpacing: "0.02em",
            color: "#fff",
          }}
          className="shimmer-btn"
        >
          <span style={{ fontSize: "20px" }}>✦</span>
          {affirmation ? "New Affirmation" : "Generate Affirmation"}
          <span style={{ fontSize: "20px" }}>✦</span>
        </button>
        <p className="text-xs" style={{ color: d ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.25)" }}>
          Click or press <kbd style={{
            padding: "2px 8px",
            borderRadius: "6px",
            background: d ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
            border: d ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
            fontSize: "11px"
          }}>Space</kbd> to generate
        </p>
      </div>
    </div>
  );
}
