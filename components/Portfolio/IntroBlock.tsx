import { Button } from '../Button';
import { GitHub, LinkedIn } from '../SocialIcons';

const IntroBlock = () => {
  return (
    <div className="relative grid h-full grid-rows-4">
      <div className="row-span-3">
        <h1 className="text-3xl font-semibold">Hi, my name is Kieran</h1>
        <h2 className="mt-4 text-lg">I am a Frontend Developer based in London, UK.</h2>
        <p className="mb-6 text-lg">
          I currently work at Global Radio building a radio & podcast streaming service.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button
          className="rounded-full bg-slate-700 px-6 hover:bg-slate-600"
          type="anchor"
          href="mailto:kieranbs96@gmail.com"
          target="_blank"
        >
          Contact me
        </Button>
        <Button
          type="anchor"
          href="https://www.linkedin.com/in/kieranbs96/"
          target="_blank"
          className="rounded-full bg-slate-700 hover:bg-slate-600"
        >
          <LinkedIn />
        </Button>
        <Button
          type="anchor"
          href="https://github.com/kieranbs96/"
          target="_blank"
          className="rounded-full bg-slate-700 hover:bg-slate-600"
        >
          <GitHub />
        </Button>
        <Button
          type="anchor"
          href="https://docs.google.com/document/d/1SrjgdxkoMGls5e3nOPQBDnhMV6K4XVgDUewDuK5NhBo/edit?usp=sharing"
          target="_blank"
          className="rounded-full bg-slate-700 px-6 hover:bg-slate-600"
        >
          Résumé
        </Button>
      </div>
    </div>
  );
};

export default IntroBlock;
