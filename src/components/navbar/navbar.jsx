export default function Navbar() {
    return(
        <div class="text-1xl flex text-purple-400">
            <h1 class="flex-1 w-128">
            <button class="bg-transparent hover:bg-purple-400 text-purple-400 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            ABOUT
            </button>
            </h1>
            <h1 class="flex-1 w-64">
                EXPERIENCE
            </h1>
            <h1 class="flex-1 w-32">
                PROJECTS
            </h1>
            <h1 class="flex-1 w-16">
                CONTACT
            </h1>
        </div>
    )
}