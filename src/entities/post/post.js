const { get } = require("mongoose");
const { InvalidPropertyError } = require("../../shared/errors");

module.exports = function buildMakePost({ Id }) {
  return function makePost({
    id = Id.makeId(),
    title,
    content,
    imageUrl,
    gallery = [],
    tags = [],
    status = "draft",
    formatted = {},
    publishTo = {},
    stats = {},
    authorName,
    authorImg
  } = {}) {
    if (!id) {
      throw new InvalidPropertyError("Post uchun yaroqli id bo'lishi shart.");
    }

    if (!title) {
      throw new InvalidPropertyError("Post uchun sarlavha (title) bo'lishi shart.");
    }

    if (!content) {
      throw new InvalidPropertyError("Post uchun matn (content) bo'lishi shart.");
    }

    if (!["draft", "published"].includes(status)) {
      throw new InvalidPropertyError("Post status faqat 'draft' yoki 'published' bo'lishi kerak.");
    }

    return Object.freeze({
      getId: () => id,
      getTitle: () => title,
      getContent: () => content,
      getImageUrl: () => imageUrl,
      getGallery: () => gallery,
      getTags: () => tags,
      getStatus: () => status,
      getFormatted: () => formatted,
      getPublishTo: () => publishTo,
      getStats: () => stats,
      getAuthorName: () => authorName,
      getAuthorImg: () => authorImg,

      // helper metodlar
      publishToTelegram,
      publishToFacebook,
      publishToInstagram,
      publishToWebsite,
      updateStats
    });

    function publishToTelegram() {
      publishTo.telegram = true;
    }

    function publishToFacebook() {
      publishTo.facebook = true;
    }

    function publishToInstagram() {
      publishTo.instagram = true;
    }

    function publishToWebsite() {
      publishTo.website = true;
    }

    function updateStats(platform, newStats) {
      if (!stats[platform]) stats[platform] = {};
      stats[platform] = { ...stats[platform], ...newStats };
    }
  };
};