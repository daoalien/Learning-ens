import * as Exports from './'

const exportedKeys = Object.keys(Exports)

const expectedExportedKeys = [
  'mq',
  'tokens',
  'baseTheme',
  'lightTheme',
  'darkTheme',
  'Components',
  // atoms
  'Avatar',
  'BackdropSurface',
  'Banner',
  'Button',
  'Card',
  'CurrencyToggle',
  'DynamicPopover',
  'Field',
  'FileInput',
  'Heading',
  'Portal',
  'ScrollBox',
  'Skeleton',
  'Spinner',
  'Tag',
  'ThorinGlobalStyles',
  'Typography',
  'VisuallyHidden',
  // molecules
  'Backdrop',
  'Checkbox',
  'CheckboxRow',
  'CountdownCircle',
  'Dropdown',
  'FieldSet',
  'Helper',
  'Input',
  'Modal',
  'Profile',
  'PageButtons',
  'RadioButton',
  'RadioButtonGroup',
  'RecordItem',
  'Select',
  'SkeletonGroup',
  'Slider',
  'Textarea',
  'Tooltip',
  // organisms
  'Dialog',
  'Toast',
  'Toggle',
  // icons
  'AeroplaneSVG',
  'AlertSVG',
  'BrowserSVG',
  'CalendarSVG',
  'CameraSVG',
  'CheckCircleSVG',
  'CheckSVG',
  'CogActiveSVG',
  'CogSVG',
  'CopySVG',
  'CounterClockwiseArrowSVG',
  'CreditCardSVG',
  'CrossCircleSVG',
  'CrossSVG',
  'DisabledSVG',
  'DocumentSVG',
  'DotGridActiveSVG',
  'DotGridSVG',
  'DownArrowSVG',
  'DownChevronSVG',
  'DownCircleSVG',
  'EnsSVG',
  'EnvelopeSVG',
  'EthSVG',
  'EthTransparentInvertedSVG',
  'EthTransparentSVG',
  'ExitSVG',
  'EyeSVG',
  'EyeStrikethroughSVG',
  'FastForwardSVG',
  'FilterSVG',
  'FlameSVG',
  'GasPumpSVG',
  'HeartActiveSVG',
  'HeartSVG',
  'HorizontalOutwardArrowsSVG',
  'HouseSVG',
  'InfoCircleSVG',
  'KeySVG',
  'LanguageSVG',
  'LeftArrowSVG',
  'LeftChevronSVG',
  'LifebuoySVG',
  'LinkSVG',
  'ListDownSVG',
  'ListSVG',
  'ListUpSVG',
  'LockSVG',
  'MagnifyingGlassActiveSVG',
  'MagnifyingGlassSVG',
  'MagnifyingGlassSimpleSVG',
  'MarkerSVG',
  'MenuSVG',
  'MinusCircleSVG',
  'MinusSVG',
  'MoonSVG',
  'NametagSVG',
  'OutlinkSVG',
  'PersonPlusSVG',
  'PersonSVG',
  'PersonActiveSVG',
  'PlusSVG',
  'PlusCircleSVG',
  'QuestionSVG',
  'QuestionBubbleSVG',
  'QuestionCircleSVG',
  'RightArrowSVG',
  'RightChevronSVG',
  'SpannerAltSVG',
  'SpannerSVG',
  'SunSVG',
  'UpArrowSVG',
  'UpChevronSVG',
  'UpCircleSVG',
  'UpRightArrowSVG',
  'VerticalDotsSVG',
  'WalletSVG',
]

it('should expose correct exports', () => {
  expect(exportedKeys.sort()).toEqual(expectedExportedKeys.sort())
})