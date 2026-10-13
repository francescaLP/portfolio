export default function Bio() {
  return (
    <div id="bio" className=" py-12">
      <h2 className="text-center text-white ">bio</h2>
      <div id="bio" className="p-10 min-h-60 sm:grid-col md:flex justify-center">
        <div className="min-w-12 p-4 justify-center">
          <img className="p-4 min-w-25 max-w-75" src="/francescaPortrait.jpg"></img>
        </div>
        <div className="items-center p-12">
          <div className=" p-4 ">
            <p className="">
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
