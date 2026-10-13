export default function Bio() {
  return (
    <div id="bio" className="w-full py-12">
      <h2 className="text-center text-white ">bio</h2>
      <div id="bio" className="p-10 min-h-60 flex">
        <div className="flex p-20">
          <img className="aspect-auto w-sm" src="/francescaPortrait.jpg"></img>
        </div>
        <div className="flex-row gap-2 items-center justify-center p-14">
          <div className="flex-row p-4 ">
            <p className="text-wrap text-sm md:text-2xl">
              New York based full stack developer and game designer with a
              passion for sound and music
            </p>
            <div className="flex-row">
              <a
                href="https://github.com/Frankie-Pettigrew/"
                className="hover:text-blue-400 p-4"
              >
                Github
              </a>
              <a
                href="https://soundcloud.com/stuttersprite"
                className=" hover:text-blue-400 p-4"
              >
                Soundcloud
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
