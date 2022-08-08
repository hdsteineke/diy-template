export default function Avatar({ src, username }) {
  return src ? (
    <img
      src={src}
      alt={`${username}'s avatar`}
    />
  ) : null;
}
