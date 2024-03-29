import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="purple_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share your discoveries in the world of AI.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt, Tool
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your post here..."
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Category {` `}
            <span>(#programming, #medicine, #diagnostics, #design, #analytics, #automotive-engineering, etc.)</span>
          </span>
          <input
            value={post.category}
            onChange={(e) => setPost({ ...post, category: e.target.value })}
            placeholder="#category"
            required
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag {` `}
            <span>(#analysis, #solution, #idea, #product, #webdevelopment, #engine, etc.)</span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end max-3 mb-5 gap-4">
          <Link href="/" className="text-grey-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-purple-800 rounded-full text-white"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form;