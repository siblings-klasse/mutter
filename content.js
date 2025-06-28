const artworks = {
  1: { artist: "artist name", title: "title", material: "material", description: "short desc" },
  2: { artist: "artist name", title: "title", material: "material", description: "long desc" },
  3: { artist: "artist name", title: "title", material: "material", description: "desc" },
  4: { artist: "artist name", title: "title", material: "material", description: "desc" },
  19: { artist: "artist name", title: "title", material: "material", description: "desc" }
};

const markers = document.querySelectorAll('.marker');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeOverlay');
const nameEl = document.getElementById('artistName');
const titleEl = document.getElementById('artworkTitle');
const materialEl = document.getElementById('artworkMaterial');
const descEl = document.getElementById('artworkDesc');

// Show overlay and mark as visited
markers.forEach(marker => {
  marker.addEventListener('click', () => {
    const id = marker.getAttribute('data-id');
    const art = artworks[id];
    if (art) {
      nameEl.textContent = art.artist;
      titleEl.textContent = art.title;
      materialEl.textContent = art.material;
      descEl.textContent = art.description;
      overlay.style.display = 'flex';
    }

    // Mark as visited
    marker.classList.remove('selected'); // Remove yellow
    marker.classList.add('visited');     // Turn purple
  });
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// Highlight on artist name click (just yellow preview)
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.artist').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const targetId = href.substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Temporarily highlight (only if not already visited)
        if (!target.classList.contains('visited')) {
          target.classList.add('selected');

          // Optional: remove yellow after a few seconds
          setTimeout(() => {
            target.classList.remove('selected');
          }, 3000);
        }
      }
    });
  });
});
