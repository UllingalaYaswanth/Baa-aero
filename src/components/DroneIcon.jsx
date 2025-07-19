export default function DroneIcon({ top, left, delay = '0s', duration = '15s' }) {
  return (
    <i 
      className="fas fa-drone-alt absolute text-2xl text-white/70"
      style={{
        top,
        left,
        animation: `droneFly ${duration} infinite linear`,
        animationDelay: delay
      }}
    />
  )
}