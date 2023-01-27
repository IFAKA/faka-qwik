import { component$, Slot } from "@builder.io/qwik";
import Footer from "~/components/footer/footer";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <div class="flex justify-center">
      <main class="border">
        <Header />
        <section>
          <Slot />
        </section>
        <footer class="flex h-8 justify-center items-center">
          <Footer />
        </footer>
      </main>
    </div>
  );
});
