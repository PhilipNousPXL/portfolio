import {createMemoryHistory, createRouter} from 'vue-router'
import PersonalPage from "./components/PersonalPage.vue";
import ExperiencesPage from "./components/ExperiencesPage.vue";
import ReflectionPage from "./components/ReflectionPage.vue";

export const appRoutes = {
    home: "/",
    experience: "/e",
    reflection: "/r"
}

const routes = [
    { path: appRoutes.home, component: PersonalPage },
    { path: appRoutes.experience, component: ExperiencesPage },
    { path: appRoutes.reflection, component: ReflectionPage },
]

export const router = createRouter({history: createMemoryHistory(), routes });
