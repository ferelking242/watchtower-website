import { useI18n } from "fumadocs-ui/contexts/i18n";
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SharedProps,
} from "fumadocs-ui/components/dialog/search";
import { useStaticSearch } from "fumadocs-core/search/client";

export default function DefaultSearchDialog(props: SharedProps) {
  const { locale } = useI18n();
  const searchPath = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/api/search/${locale}.json`;
  const search = useStaticSearch({ from: searchPath, locale });

  return (
    <SearchDialog {...search} {...props}>
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList />
      </SearchDialogContent>
    </SearchDialog>
  );
}
