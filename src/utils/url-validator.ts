export default function urlValidator(str: string) {
  const redditRegEx =
    /^https:\/\/www.reddit.com\/r\/[\D\d]*\/comments\/[\D\d]*\/[\D\d]*/i;

  if (redditRegEx.test(str)) return str;

  return "URL not valid";
}
