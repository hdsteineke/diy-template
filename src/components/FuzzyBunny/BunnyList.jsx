
export default function BunnyList() {
  return (
    <>
      <div>
        <p>FuzzyLumpkins</p>
        <p>MojoJojo</p>
        <p>Princess Rainbow Sparkle</p>
        <p>Miss Honey</p>
      </div>
      <form>
        <input
          required
          title={'Add a bunny'}
          placeholder="new bunny goes here"
        />
        <button>Add</button>
      </form>
    </>
  );
}
