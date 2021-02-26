export const getRandomBoolean = () =>
  Math.floor((Math.random() * 10)) % 2 === 0;

export const getRandomFromRange = min => max => couldBeNegative =>
  Math.floor((Math.random() * (max - min)) + 1) * (couldBeNegative ? (getRandomBoolean() ? -1 : 1) : 1);

export const shortenText = length => text =>
  text.trim().substring(0, length).split(' ').slice(0, -1).join(' ') + '...';

export const createElementWithClass = element => classes =>
  $(document.createElement(element)).addClass(classes);

export const windowElement = (classes = '') => children =>
  createElementWithClass('div')(`window modal-card ${ classes }`).append(children);

export const closeWindowCallback = element => icon => {
  $(element).remove();
  $(icon).removeClass('open');
};

export const windowOptionsCSS = () => ({
  left: `${getRandomFromRange(0)(70)(false)}%`,
  top: `${getRandomFromRange(0)(70)(false)}%`
});

export const windowHeaderElement = (classes = '') => text => children => {
  const header = createElementWithClass('header')(`title-bar modal-card-head ${ classes }`);
  header.append('p').text(text);
  header.append(children);
  return header;
};

export const iframeElement = url => $(document.createElement('iframe')).attr('src', url);

export const buttonElement = classes => ariaLabel => (text = '') =>
  $(createElementWithClass('button')(classes)).attr('aria-label', ariaLabel);

export const windowStatusBarElement = classes => createElementWithClass('footer')(classes);

export const createFullWindowElement = anchor => {
  const closeBtn = buttonElement('delete')('close');
  return windowElement()([
    windowHeaderElement()(anchor.title)([closeBtn]),
    iframeElement(anchor.href),
    windowStatusBarElement('status-bar modal-card-foot')
  ]);
}
