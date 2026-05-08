function OrbitLoader() {
  return (
    <div className="h-screen flex items-center justify-center bg-primary">
      <div className="relative w-16 h-16 animate-spin">
        <div className="absolute w-3 h-3 bg-black rounded-full top-0 left-1/2 transform -translate-x-1/2"></div>
        <div className="absolute w-3 h-3 bg-black rounded-full bottom-0 left-1/2 transform -translate-x-1/2"></div>
        <div className="absolute w-3 h-3 bg-black rounded-full left-0 top-1/2 transform -translate-y-1/2"></div>
        <div className="absolute w-3 h-3 bg-black rounded-full right-0 top-1/2 transform -translate-y-1/2"></div>
      </div>
    </div>
  );
}

export default OrbitLoader;