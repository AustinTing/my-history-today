package com.expixel.myhistoryintoday;
import android.app.DatePickerDialog;
import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.support.annotation.RequiresApi;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.ImageView;
import android.widget.TextView;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ListAdapter;
import android.widget.TextView;

import java.util.Calendar;
import java.util.Locale;

import butterknife.BindView;
import butterknife.ButterKnife;
import de.halfbit.pinnedsection.PinnedSectionListView;

public class MainActivity extends AppCompatActivity {

//初始化
    private ImageView dateButton;
    private Calendar calendar;
    private int mYear, mMonth, mDay;
    private TextView dateText;
    private DatePickerDialog datePickerDialog;


    ListAdapter listAdapter;

    PinnedSectionListView listView;
    @BindView(R.id.fab)
    FloatingActionButton fab;

    public final static String TAG = "MyHistory";

    @RequiresApi(api = Build.VERSION_CODES.N)
    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ButterKnife.bind(this);
//設定日期
        calendar = Calendar.getInstance();
        mYear = calendar.get(Calendar.YEAR);
        mMonth = calendar.get(Calendar.MONTH);
        mDay = calendar.get(Calendar.DAY_OF_MONTH);

        dateText = (TextView)findViewById(R.id.dateText);
        dateText.setText(setDateFormat(mYear,mMonth,mDay));
        dateButton = (ImageView) findViewById(R.id.dateButton);
        dateButton.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                showDialog(0);
                datePickerDialog.updateDate(mYear, mMonth, mDay);
            }

        });



        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        listView = (PinnedSectionListView) findViewById(R.id.listView);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent();
                intent.setClass(MainActivity.this, PostActivity.class);
                MainActivity.this.startActivity(intent);
            }
        });

        listView.setAdapter(new SimpleAdapter(this, android.R.layout.simple_list_item_1, android.R.id.text1));


    }

    @Override
    protected Dialog onCreateDialog(int id) {
        datePickerDialog = new DatePickerDialog(this, new DatePickerDialog.OnDateSetListener() {
            @Override
            public void onDateSet(DatePicker view, int year, int month,
                                  int day) {
                mYear = year;
                mMonth = month;
                mDay = day;
                dateText.setText(setDateFormat(year,month,day));
            }

        }, mYear,mMonth, mDay);

        return datePickerDialog;
    }

    private String setDateFormat(int year,int monthOfYear,int dayOfMonth){
        return String.valueOf(year) + "-"
                + String.valueOf(monthOfYear + 1) + "-"
                + String.valueOf(dayOfMonth);
    }



    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    static class SimpleAdapter extends ArrayAdapter<Item> implements PinnedSectionListView.PinnedSectionListAdapter {

        private static final int[] COLORS = new int[]{
                R.color.colorItem1, R.color.colorItem2,
                R.color.colorItem3, R.color.colorItem4};

        public SimpleAdapter(Context context, int resource, int textViewResourceId) {
            super(context, resource, textViewResourceId);
            generateDataset('A', 'Z', false);
        }

        public void generateDataset(char from, char to, boolean clear) {

            if (clear) clear();

            final int sectionsNumber = to - from + 1;
            prepareSections(sectionsNumber);

            int sectionPosition = 0, listPosition = 0;
            for (char i = 0; i < sectionsNumber; i++) {
                Item section = new Item(Item.SECTION, String.valueOf((char) ('A' + i)));
                section.sectionPosition = sectionPosition;
                Log.d(TAG, "SimpleAdapter: sectionPosition: "+sectionPosition);
                Log.d(TAG, "SimpleAdapter: listPosition: "+listPosition);
                section.listPosition = listPosition++;
                Log.d(TAG, "SimpleAdapter: listPosition: "+listPosition);
                onSectionAdded(section, sectionPosition);
                add(section);

                final int itemsNumber = (int) Math.abs((Math.cos(2f * Math.PI / 3f * sectionsNumber / (i + 1f)) * 25f));
                for (int j = 0; j < itemsNumber; j++) {
                    Item item = new Item(Item.ITEM, section.text.toUpperCase(Locale.ENGLISH) + " - " + j);
                    item.sectionPosition = sectionPosition;
                    item.listPosition = listPosition++;
                    add(item);
                }

                sectionPosition++;
            }
        }

        protected void prepareSections(int sectionsNumber) {
        }

        protected void onSectionAdded(Item section, int sectionPosition) {
        }

        @Override
        public View getView(int position, View convertView, ViewGroup parent) {
            TextView view = (TextView) super.getView(position, convertView, parent);
            view.setTextColor(Color.DKGRAY);
            view.setTag("" + position);
            Item item = getItem(position);
            Log.d(TAG, "SimpleAdapter: getView: item: "+item.toString());
            if (item.type == Item.SECTION) {
                //view.setOnClickListener(PinnedSectionListActivity.this);
                view.setBackgroundColor(parent.getResources().getColor(COLORS[item.sectionPosition % COLORS.length]));
                view.setTextAlignment(View.TEXT_ALIGNMENT_TEXT_END);
                view.setTextColor(Color.WHITE);
                view.setTextSize(24);

            }
            return view;
        }

        @Override
        public int getViewTypeCount() {
            return 2;
        }

        @Override
        public int getItemViewType(int position) {
            return getItem(position).type;
        }

        @Override
        public boolean isItemViewTypePinned(int viewType) {
            Log.d(TAG, "SimpleAdapter: isItemViewTypePinned: viewType: "+viewType);
            Log.d(TAG, "SimpleAdapter: isItemViewTypePinned: viewType == Item.SECTION"+(viewType == Item.SECTION));
            return viewType == Item.SECTION;
        }

    }

    static class Item {

        public static final int ITEM = 0;
        public static final int SECTION = 1;

        public final int type;
        public final String text;

        public int sectionPosition;
        public int listPosition;

        public Item(int type, String text) {
            this.type = type;
            this.text = text;
        }

        @Override
        public String toString() {
            return text;
        }

    }
}
