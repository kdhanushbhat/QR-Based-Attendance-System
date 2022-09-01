package com.example.zxingscanner;


import android.app.Activity;
        import android.graphics.Color;
        import android.os.Bundle;
import android.util.Log;
import android.view.KeyEvent;
        import android.view.View;
        import android.widget.ImageView;
import android.widget.TextView;

import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.zxing.BarcodeFormat;
        import com.google.zxing.ResultPoint;
        import com.google.zxing.client.android.BeepManager;
        import com.journeyapps.barcodescanner.BarcodeCallback;
        import com.journeyapps.barcodescanner.BarcodeResult;
        import com.journeyapps.barcodescanner.DecoratedBarcodeView;
        import com.journeyapps.barcodescanner.DefaultDecoderFactory;

        import java.util.Arrays;
        import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Objects;

/**
 * This sample performs continuous scanning, displaying the barcode and source image whenever
 * a barcode is scanned.
 */
public class MainActivity2 extends Activity {
    private DecoratedBarcodeView barcodeView;
    private BeepManager beepManager;

    private String[] lastText;
    TextView tv ;
    private int i=0;
    private BarcodeCallback callback = new BarcodeCallback() {
        @Override
        public void barcodeResult(BarcodeResult result) {
//|| result.getText().equals(lastText))

            if(result.getText() == null || i>9)  {
                // Prevent duplicate scans
                return;
            }
            for(int j = 0;j<lastText.length;j++) {
                String s = lastText[j];
                if (Objects.equals(s, result.getText())) {
                    return;
                }
            }
            lastText[i] =result.getText();
            i++;
            String  text = tv.getText().toString();
            String fil = text+result.getText();
            Date d1 = new Date();
            FirebaseDatabase database = FirebaseDatabase.getInstance();
            DatabaseReference myRef = database.getReference("attendance").child(d1.toString()).child(result.getText());

            myRef.setValue(result.getText());
            tv.setText(fil);
            barcodeView.setStatusText(String.valueOf(i));
            beepManager.playBeepSoundAndVibrate();
//            ImageView imageView = findViewById(R            //Added preview of scanned barcode.id.barcodePreview);
//            imageView.setImageBitmap(result.getBitmapWithResultPoints(Color.YELLOW));

        }

        @Override
        public void possibleResultPoints(List<ResultPoint> resultPoints) {
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        tv = findViewById(R.id.textView);
        barcodeView = findViewById(R.id.barcode_scanner);


        Collection<BarcodeFormat> formats = Arrays.asList(BarcodeFormat.QR_CODE, BarcodeFormat.CODE_39);
        barcodeView.getBarcodeView().setDecoderFactory(new DefaultDecoderFactory(formats));
        barcodeView.initializeFromIntent(getIntent());
        barcodeView.decodeContinuous(callback);
        lastText = new String[10];
        i=0;
        beepManager = new BeepManager(this);
    }

    @Override
    protected void onResume() {
        super.onResume();

        barcodeView.resume();
    }

    @Override
    protected void onPause() {
        super.onPause();

        barcodeView.pause();
    }

    public void pause(View view) {
        barcodeView.pause();
    }

    public void resume(View view) {
        barcodeView.resume();
    }

    public void triggerScan(View view) {
        barcodeView.decodeSingle(callback);
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        return barcodeView.onKeyDown(keyCode, event) || super.onKeyDown(keyCode, event);
    }
}