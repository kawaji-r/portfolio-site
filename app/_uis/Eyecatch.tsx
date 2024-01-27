const Eyecatch = () => {
  return (
    <>
      <h1 className="min-h-screen my-6 flex flex-col items-center justify-center">
        <span className="font-maru text-6xl">My Name is</span>
        <span className="font-maru text-9xl">River</span>
        <img
          className="mt-4 animate-wobble-hor-bottom"
          src="robot.png"
          alt="説明的なテキスト"
        />
        <span className="font-maru text-4xl">System Engineer</span>
      </h1>
    </>
  )
}

export default Eyecatch
