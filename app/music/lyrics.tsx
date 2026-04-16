'use client';

import { useState } from 'react';

const hindiLyrics = `कह दिया सब ठीक है पर ठीक था ही नहीं
तू मेरे सामने थी पर मैं वहाँ था ही नहीं

हाथ तेरा थामा था पर थामे रह न सका
जो बात दिल में थी वो तुझसे कह न सका

तूने रोका था मुझे मैं रुक भी न सका
तू कुछ कहती रही पर सुन ही न सका

तूने कहा था मुझे छोड़ न देना
मैं हाँ कह के भी रुक न सका

तूने कहा था मुझे तोड़ न देना
मैं पास होकर भी दूर ही रहा

अब भी कभी यूँ ही तेरा ख्याल आता है
कुछ भी नहीं होता पर दिल भर आता है

मैंने खुद ही छोड़ा था फिर लौटता क्यों हूँ
जो पीछे रह गया था उसी में लौटता क्यों हूँ

मैंने आसान रास्ता उस दिन चुन लिया था
जो दिल के सबसे पास था उसे ही छोड़ दिया था

तूने कहा था मुझे छोड़ न देना
मैं हाँ कह के भी रुक न सका

तूने कहा था मुझे तोड़ न देना
मैं पास होकर भी दूर ही रहा

अब सोचूँ तो लगता है सब साफ था तभी
तू बस यही चाहती थी मैं रुक जाऊँ यहीं

अब सोचूँ तो लगता है तू ठीक कहती थी
मैं सुनता सब रहा पर ठहरा ही नहीं

तूने कहा था… मुझे छोड़ न देना…
मैं हाँ कह के भी… रुक न सका…

तूने कहा था… मुझे तोड़ न देना…
मैं पास होकर भी… दूर ही रहा…`;

const englishLyrics = `I said I'm fine
but I wasn't really
you stood right in front of me
but I wasn't there, not really

I held your hand
but I couldn't hold on
everything I had to say
I never said it out loud

you tried to stop me
I still remember that
I could've stayed back then
but I just didn't

you told me
don't let me go
even when I said I wouldn't
I still couldn't stay

you told me
don't break me like this
even when I was right there
I was already gone

sometimes even now
you just cross my mind
nothing really happens
but my chest feels tight

I was the one who left
so why do I go back
to the place I walked away from
why do I keep going back

I chose the easier road
that day without thinking
and the one thing that mattered most
I was the one who left it

you told me
don't let me go
even when I said I wouldn't
I still couldn't stay

you told me
don't break me like this
even when I was right there
I was already gone

now when I think about it
it was all clear back then
you only wanted one thing
that I'd just stay

you were right about it
I can see it now
I heard every word you said
but I never stayed

you told me…
don't let me go…
even when I said I wouldn't…
I still couldn't stay…

you told me…
don't break me like this…
even when I was right there…
I was already gone…`;

export function Lyrics() {
  const [lang, setLang] = useState<'hindi' | 'english'>('hindi');

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
          lyrics
        </h2>
        <span className="text-neutral-300 dark:text-neutral-700 mx-1">—</span>
        <div className="flex gap-1">
          <button
            onClick={() => setLang('hindi')}
            className={`text-xs px-2.5 py-1 rounded-md transition-colors duration-150 ${
              lang === 'hindi'
                ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium'
                : 'text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300'
            }`}
          >
            hindi
          </button>
          <button
            onClick={() => setLang('english')}
            className={`text-xs px-2.5 py-1 rounded-md transition-colors duration-150 ${
              lang === 'english'
                ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium'
                : 'text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300'
            }`}
          >
            english
          </button>
        </div>
      </div>
      <pre className="text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-lg whitespace-pre-wrap font-[inherit]">
        {lang === 'hindi' ? hindiLyrics : englishLyrics}
      </pre>
    </div>
  );
}
